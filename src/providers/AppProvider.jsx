import React, {
  createContext,
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo
} from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { configuration_namespaceObject, resultPageUrl } from "../utils/Constent"
import { sizeSorter, unique, computeStepOrder } from "../utils/Common"
import qs from "qs";

/* -----------------------------------------
   IMPORT YOUR DATA FILES
----------------------------------------- */

import {
  materials,
  devices,
  thicknesses,
  application_groups,
  center_hole_sizes,
  other_center_hole_sizes,
  backing_materials,
  backing_materials_rolls,
  backing_materials_sheets,
  backing_materials_belts,
  defaultAppValue,
  apiService,
  PFShopDomain,
  baseUrl
} from "../utils/Constent";



/* -----------------------------------------
   CONTEXT
----------------------------------------- */

export const AppContext = createContext(defaultAppValue);

/* -----------------------------------------
   DEFAULT FILTERS
----------------------------------------- */

const defaultAvailableFilters = {
  "Machine": [],
  "Surface": [],
  "Shape": [],
  "Material Type": [],
  "WidthAndHeight": [],
  "Dim 2 Description Fraction": [],
  "Dim 3 Description": [],
  "Thickness": []
};

/* -----------------------------------------
   PROVIDER
----------------------------------------- */

const AppProvider = ({ children }) => {

  const [step, setStep] = useState("");
  const [pickedData, setPickedData] = useState({});
  const [resultsCount, setResultsCount] = useState(0);

  const { pathname } = useLocation();
  const isResults = pathname === resultPageUrl;

  const [availableFilters, setAvailableFilters] = useState(defaultAvailableFilters);

  const [shopifyProductIds, setShopifyProductIds] = useState([]);
  const [filterWithCount, setFilterWithCount] = useState({
    grit: [],
    grain: []
  })

  const [filtersLoading, setFiltersLoading] = useState(false);
  const sizes = configuration_namespaceObject.L;

  const firstRun = useRef(true);
  const abortControllerRef = useRef(null);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();


  // ── stepOrder: array of { step, title } ──
  const stepOrderFull = useMemo(() => {
    const device = pickedData?.device || "";
    const material = pickedData?.material || "";
    return computeStepOrder(device, material);
  }, [pickedData]);

  // ── stepOrder as flat string array for getPayload lookup ──
  const stepOrder = useMemo(() => {
    return stepOrderFull.map((s) => s.step);
  }, [stepOrderFull]);

  /* -----------------------------------------
     INITIAL LOAD
  ----------------------------------------- */

  useEffect(() => {

    if (!firstRun.current) return;

    firstRun.current = false;

    let decoded = {};

    const local = localStorage.getItem("pf-data");

    if (local) {
      try {
        decoded = JSON.parse(local);
      } catch {
        decoded = {};
      }
    }

    const params = qs.parse(searchParams?.toString(), {
      ignoreQueryPrefix: true
    });

    const keys = [
      "device",
      "material",
      "attachment",
      "application",
      "backing",
      "size",
      "size_height",
      "center_hole",
      "center_hole_size",
      "vented_hole",
      "thickness"
    ];

    let data = { ...decoded };

    keys.forEach((key) => {

      const value = params[key];

      if (value !== undefined && value !== null) {

        if (key === "application" && !Array.isArray(value)) {
          data[key] = [value];
        } else {
          data[key] = value;
        }

      }

    });

    setPickedData(data);

  }, []);

  useEffect(() => {
    const urlStep = searchParams.get('step');
    if (typeof urlStep === 'string') {
      setStep(urlStep || '');
    } else {
      setStep('');
    }
  }, [
    searchParams
  ]);

  /* -----------------------------------------
     SAVE LOCAL STORAGE
  ----------------------------------------- */

  useEffect(() => {

    if (!firstRun.current) {
      localStorage.setItem("pf-data", JSON.stringify(pickedData));
    }

  }, [pickedData]);


  useEffect(() => {

    if (!step) return;

    const q = getStringifiedQuery();

    let path = baseUrl;

    if (step === "inquire") path = `${baseUrl}/inquire`;
    if (step === "results") path = resultPageUrl;

    navigate(`${path}?${q}&step=${step}`, { replace: false });

  }, [step, getStringifiedQuery]);
  /* -----------------------------------------
     SEARCH BODY
  ----------------------------------------- */

  const prepareSearchBody = useCallback(() => {

    const params = qs.parse(searchParams?.toString(), {
      ignoreQueryPrefix: true
    });

    if (Object.keys(pickedData).length) {
      return {
        ...pickedData,
        countonly: 1,
        withfilters: 1
      };
    }

    return {
      ...params,
      countonly: 1,
      withfilters: 1
    };

  }, [pickedData, step]);

  /* -----------------------------------------
     FETCH RESULTS
  ----------------------------------------- */
  const getPayload = useCallback(() => {

    const body = prepareSearchBody();
    const base = { ...body };

    const currentStep = searchParams.get("step");

    if (currentStep && stepOrder.length) {
      const currentIndex = stepOrder.indexOf(currentStep);

      if (currentIndex !== -1) {
        const toDelete = stepOrder.slice(currentIndex);

        for (const key of toDelete) {
          delete base[key];

          if (key === "ventedhole" || key === "centerhole") {
            delete base.vented_hole;
            delete base.center_hole;
            delete base.center_hole_size;
          }
        }

      } else {
      }
    }

    const {
      material, size, size_height,
      vented_hole, device, thickness,
      application, backing, ...restBody
    } = base;

    const shapeDescriptions = materials?.[material]?.["Shape Description"] ?? [];

    let attachmentValues = [];
    if (restBody?.attachment) {
      Object.values(materials).forEach((mat) => {
        const values = mat?.["Attachment Types"]?.[restBody.attachment]?.Values;
        if (values) attachmentValues.push(...values);
      });
      attachmentValues = [...new Set(attachmentValues)];
    }

    const payload = {
      shop: PFShopDomain,
      shape_description: shapeDescriptions,
      dim_1_description_fraction: size || undefined,
      dim_2_description_fraction: size_height || undefined,
      machine: device || undefined,
      shape: attachmentValues,
      dim_3_description: vented_hole || undefined,
      thickness: thickness || undefined,
      surface: application || [],
      material_type: backing || undefined,
      isFinalFilter: isResults ? 1 : 0,
      shopify_product_ids: shopifyProductIds
    };

    return payload;

  }, [prepareSearchBody, materials, pickedData, step, stepOrder]);

  const fetchResults = useCallback(async () => {
    if (firstRun.current) return;

    // 🔥 Abort previous request
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }

    const controller = new AbortController();
    abortControllerRef.current = controller;

    setFiltersLoading(true);

    try {
      const payload = getPayload();

      console.log("payload", payload);

      const res = await apiService.getFilter(payload, {
        signal: controller.signal, // ✅ pass abort signal
      });

      if (res?.apiStatus === 200) {
        setResultsCount(res?.total || 0);
        setAvailableFilters(res?.filters || defaultAvailableFilters);
        setShopifyProductIds(res?.shopify_product_ids || [])
        if (isResults) {
          setFilterWithCount({
            grit: res?.grit_counts || [],
            grain: res?.grain_counts || []

          })
        }
      }

    } catch (error) {
      if (error.name === "AbortError") {
        // request cancelled → ignore
        return;
      }
      console.error(error);
    } finally {
      if (abortControllerRef.current === controller) {
        setFiltersLoading(false);
      }
    }
  }, [getPayload]);

  useEffect(() => {
    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, []);


  useEffect(() => {
    fetchResults();
  }, [pickedData, fetchResults]);

  /* -----------------------------------------
     QUERY STRING
  ----------------------------------------- */

  const getStringifiedQuery = useCallback((data) => {

    return qs.stringify(data || pickedData);

  }, [pickedData]);

  /* -----------------------------------------
     STEP HANDLER
  ----------------------------------------- */

  const pickStep = (nextStep) => {
    setStep(nextStep);
  };

  /* -----------------------------------------
     MATERIAL
  ----------------------------------------- */

  const pickMaterial = useCallback((material, switch_device = true) => {
    setPickedData((draft) => {
      if (draft.material !== material) {
        draft.size = '';
        draft.size_height = '';
        draft.application = [];
        draft.backing = '';
        draft.center_hole = '';
        draft.center_hole_size = '';
        draft.vented_hole = '';
        draft.attachment = '';
        draft.thickness = '';

        if (switch_device) {
          draft.device = '';
        }
      }

      draft.material = material;
      return draft;
    });

    let nextStep = 'size';

    if ((material === 'Sheets' || material === 'Sponges') && switch_device) {
      nextStep = 'use';
    } else if (material === 'Sponges' && pickedData.device !== 'Rectangular Orbital Sander') {
      nextStep = 'thickness';
    }

    pickStep(nextStep);

  }, [setPickedData, pickedData, pickStep]);


  /* -----------------------------------------
     DEVICE
  ----------------------------------------- */

  const pickDevice = (device, switchMaterial = true, switchSize = true) => {

    let material = pickedData?.material;

    setPickedData((draft) => {
      if (draft.device !== device) {
        if (switchSize) {
          draft.size = '';
          draft.thickness = '';
        }

        draft.application = [];
        draft.attachment = '';
        draft.center_hole = '';
        draft.center_hole_size = '';
        draft.vented_hole = '';

        if (switchMaterial) {
          draft.material = '';
        }
      }

      draft.device = device;

      if (switchMaterial && devices?.[device]?.material) {
        draft.material = devices[device].material;
      }

      return draft;
    });

    if (switchMaterial) {
      if (devices?.[device]?.material) {
        material = devices[device].material;
      } else {
        material = '';
      }
    }

    let nextStep = 'size';

    if (material === '' && device === 'Hand Sanding') {
      nextStep = 'specmaterial';
    } else if (material === 'Sponges' && device === 'Hand Sanding') {
      nextStep = 'thickness';
    }

    pickStep(nextStep);
  };

  /* -----------------------------------------
     SIZE
  ----------------------------------------- */

  const pickSize = (width, height) => {


    setPickedData((draft) => {
      draft.size = width;
      draft.size_height = height;
      delete draft.center_hole;
      delete draft.center_hole_size;
      delete draft.vented_hole;
      draft.application = [];
      draft.attachment = "";
      draft.backing = "";
      draft.thickness = "";
      return draft;
    });

    const pickedMaterial = pickedData?.material;

    if (["Discs", "Sheets", "Rolls"].includes(pickedMaterial)) {
      pickStep("attachment");
    } else if (pickedMaterial === "Belts") {
      pickStep("application");
    } else if (pickedMaterial === "Sponges") {
      pickStep("thickness");
    }
  };

  /* -----------------------------------------
     ATTACHMENT
  ----------------------------------------- */

  const pickAttachment = (attachment) => {
    setPickedData((draft) => {
      draft.attachment = attachment;
      draft.center_hole = "";
      draft.center_hole_size = "";
      draft.vented_hole = "";
      return draft;
    });

    const pickedMaterial = pickedData?.material;

    if (pickedMaterial === "Discs") pickStep("centerhole");
    if (pickedMaterial === "Sheets") pickStep("ventedhole");
    if (pickedMaterial === "Rolls") pickStep("application");
  };

  /* -----------------------------------------
     CENTER HOLE
  ----------------------------------------- */

  const pickCenterHole = (hole) => {
    setPickedData((prev) => ({
      ...prev,
      center_hole: hole,
      center_hole_size: "",
      vented_hole: ""
    }));

    if (hole.toLowerCase() !== "no center hole") {
      setStep("centerholesize");
    } else {
      setStep("ventedhole");
    }

  };

  const pickCenterHoleSize = (size) => {


    setPickedData((prev) => ({
      ...prev,
      center_hole_size: size
    }));

    setStep("ventedhole");

  };

  /* -----------------------------------------
     VENTED HOLES
  ----------------------------------------- */

  const pickVentedHole = (hole) => {

    setPickedData((prev) => ({
      ...prev,
      vented_hole: hole
    }));

    setStep("application");

  };

  /* -----------------------------------------
     APPLICATION
  ----------------------------------------- */

  const pickApplication = useCallback((application) => {
    setPickedData((draft) => {
      draft.application = application;
      return draft;
    });

    const isSpongesOrHandSanding =
      pickedData?.material === 'Sponges' || pickedData?.device === 'Hand Sanding';

    pickStep(isSpongesOrHandSanding ? 'results' : 'backing');

  }, [pickedData, setPickedData, pickStep]);

  /* -----------------------------------------
     BACKING
  ----------------------------------------- */

  const pickBackingMaterial = useCallback((mat) => {

    setPickedData((draft) => {
      draft.backing = mat;
      return draft;
    });

    if (pickedData?.material === 'Belts') {
      setStep(resultsCount ? 'results' : 'inquire');
    } else {
      setStep('results');
    }
  }, [pickedData, resultsCount, setPickedData, setStep]);

  /* -----------------------------------------
     THICKNESS
  ----------------------------------------- */

  const pickThickness = (thick) => {
    setPickedData((prev) => ({
      ...prev,
      thickness: thick
    }));

    if (pickedData?.device === 'Hand Sanding') {
      pickStep('application');
    } else {
      pickStep('ventedhole');
    }
  };


  /* -----------------------------------------
     PRODUCT API
  ----------------------------------------- */

  const loadProductInfo = async (sku) => {

    const res = await fetch(`?action=product&sku=${sku}`);

    return res.json();

  };

  /* -----------------------------------------
     RESET
  ----------------------------------------- */

  const resetData = (redirect = baseUrl) => {

    setPickedData({});
    setStep("");

    navigate(redirect);

  };


  const replaceData = (data) => {
    setPickedData(data);
  };

  const resetSomeData = (key) => {

    setPickedData((prev) => {

      const newData = { ...prev };

      delete newData[key];

      return newData;

    });

  };

  /* -----------------------------------------
     DATA HELPERS
  ----------------------------------------- */

  const getSizes = () => {
    if (!pickedData) return [];

    const { material: materialName, device } = pickedData;

    /* MATERIAL SELECTED */
    if (materialName) {
      const material = materials[materialName];
      const shapeNames = material?.["Shape Description"] || [];

      /* FILTER BY SHAPE */
      let results = sizes.filter((s) =>
        shapeNames.includes(
          s?.["Shape Description"]?.toLowerCase()
        )
      );

      /* DEVICE SELECTED */
      if (device) {
        const sizesPerDevice = material?.SizesPerDevice?.[device];

        if (
          ["Discs", "Sponges", "Belts", "Sheets"].includes(materialName) &&
          sizesPerDevice
        ) {
          const machines =
            devices?.[device]?.Machine?.map((m) => m.toLowerCase()) || [];

          /* TWO DIMENSION SIZE */
          if (
            ["Sponges", "Sheets"].includes(materialName) &&
            device !== "Disc Orbital Sander"
          ) {
            const additionalSizes = results
              .filter((r) =>
                machines.includes(r?.Machine?.toLowerCase())
              )
              .flatMap((r) =>
                r?.Sizes
                  ?.filter((s) => s["Dim 2 Description Fraction"])
                  .map(
                    (s) =>
                      `${s["Dim 1 Description Fraction"]}x${s["Dim 2 Description Fraction"]}`
                  ) || []
              );

            const allSizes = unique([
              ...sizesPerDevice,
              ...additionalSizes
            ]);

            return allSizes.sort(sizeSorter);
          }

          /* ONE DIMENSION SIZE */
          const additionalSizes = results
            .filter((r) =>
              machines.includes(r?.Machine?.toLowerCase())
            )
            .flatMap((r) =>
              r?.Sizes?.map(
                (s) => s["Dim 1 Description Fraction"]
              ) || []
            );

          const allSizes = unique([
            ...sizesPerDevice,
            ...additionalSizes
          ]);

          return allSizes.sort(sizeSorter);
        }
      }

      /* STATIC SIZES */
      if (Array.isArray(material?.Sizes)) {
        return material.Sizes;
      }

      /* DEFAULT SIZE EXTRACTION */
      return unique(
        results.flatMap((s) =>
          s?.Sizes?.map(
            (size) => size["Dim 1 Description Fraction"]
          ) || []
        )
      ).sort(sizeSorter);
    }

    /* DEVICE ONLY SELECTED */
    if (device) {
      const deviceData = devices?.[device];
      const machineNames = deviceData?.Machine || [];

      const results = sizes.filter((s) =>
        machineNames.some((name) =>
          new RegExp(name, "i").test(s?.Machine)
        )
      );

      return unique(
        results.flatMap((s) =>
          s?.Sizes?.map(
            (size) => size["Dim 1 Description Fraction"]
          ) || []
        )
      ).sort(sizeSorter);
    }

    return [];
  };

  const getThicknesses = () => thicknesses || [];

  const getAttachments = useCallback(() => {
    if (!pickedData?.material) return {};

    const material = materials[pickedData.material];

    // clone attachment types
    let types = {
      ...material["Attachment Types"],
    };

    for (let type in types) {
      types[type] = { ...types[type] };
    }

    if (pickedData.size) {
      // get all attachment combinations available for the selected size
      const specificSizes = sizes
        .map((shape) => {
          if (
            material["Shape Description"].indexOf(shape["Shape Description"]) ===
            -1
          ) {
            return null;
          }

          return shape.Sizes.find((size) => {
            if (pickedData.size && pickedData.size_height) {
              return (
                size["Dim 1 Description Fraction"] === pickedData.size &&
                size["Dim 2 Description Fraction"] === pickedData.size_height
              );
            }

            return size["Dim 1 Description Fraction"] === pickedData.size;
          });
        })
        .filter(Boolean)
        .map((size) => size?.Attachments)
        .flat();

      // check which attachment types are selectable
      for (let type in types) {
        let found = false;

        if (types[type].Values) {
          for (let value of types[type].Values) {
            if (specificSizes.find((attachment) => attachment === value)) {
              found = true;
              break;
            }
          }
        }

        types[type].Selectable = found;
      }
    }

    return types;
  }, [pickedData, sizes, materials]);

  const getCenterHoles = () => {
    if (pickedData?.material) {
      const material = materials[pickedData.material];
      return material?.["Center Holes"] ?? {};
    }
    return {};
  };

  const getCenterHoleSizes = () => center_hole_sizes;

  const getOtherCenterHoleSizes = () => other_center_hole_sizes;

  const getVentedHoles = () => {

    if (!pickedData?.material) return [];

    return materials[pickedData.material]?.["Vented Holes"] || [];

  };

  const getBackingMaterials = () => {

    if (pickedData?.material === "Rolls") return backing_materials_rolls;
    if (pickedData?.material === "Sheets") return backing_materials_sheets;
    if (pickedData?.material === "Belts") return backing_materials_belts;

    return backing_materials;

  };

  /* -----------------------------------------
     CONTEXT VALUE
  ----------------------------------------- */

  const value = {

    initialized: !firstRun.current,

    materials,
    devices,
    application_groups,

    device: pickedData?.device || "",
    material: pickedData?.material || "",

    pickedData,
    resultsCount,

    filtersLoading,
    availableFilters,

    step,
    setStep,

    getSizes,
    getThicknesses,
    getAttachments,
    getCenterHoles,
    getCenterHoleSizes,
    getOtherCenterHoleSizes,
    getVentedHoles,
    getBackingMaterials,

    getStringifiedQuery,

    pickStep,
    pickMaterial,
    pickDevice,
    pickSize,
    pickAttachment,
    pickCenterHole,
    pickCenterHoleSize,
    pickVentedHole,
    pickApplication,
    pickBackingMaterial,
    pickThickness,

    loadProductInfo,

    resetData,
    replaceData,
    resetSomeData,

    stepOrder,
    stepOrderFull,
    shopifyProductIds,
    filterWithCount
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );

};

export default AppProvider;