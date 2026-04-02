import React, {
  createContext,
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo
} from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { configuration_namespaceObject, resultPageUrl } from "../utils/Constants"
import { computeStepOrder } from "../utils/Common"
import qs from "qs";
import * as DataService from "../utils/DataService";


/* -----------------------------------------
   IMPORT YOUR DATA FILES
----------------------------------------- */

import {
  materials,
  devices,
  application_groups,
  defaultAppValue,
  apiService,
  PFShopDomain,
  baseUrl
} from "../utils/Constants";


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


  const [availableFilters, setAvailableFilters] = useState(defaultAvailableFilters);
  const [shopifyProductIds, setShopifyProductIds] = useState([]);
  const [filterWithCount, setFilterWithCount] = useState({
    grit: [],
    grain: []
  })
  const [filtersLoading, setFiltersLoading] = useState(false);

  const firstRun = useRef(true);
  const abortControllerRef = useRef(null);

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { pathname } = useLocation();

  const sizes = configuration_namespaceObject.L;
  const isResults = pathname === resultPageUrl;


  // ── stepOrder: array of { step, title } ──
  const stepOrderFull = useMemo(() => {
    const device = pickedData?.device || "";
    const material = pickedData?.material || "";
    return computeStepOrder(device, material);
  }, [pickedData, step]);

  // ── stepOrder as flat string array for getPayload lookup ──
  const stepOrder = useMemo(() => {
    return stepOrderFull.map((s) => s.step);
  }, [stepOrderFull, step]);

  /* ---------------- INITIAL LOAD ---------------- */

  useEffect(() => {
    if (!firstRun.current) return;
    firstRun.current = false;

    let storedData = {};

    const localData = localStorage.getItem("pf-data");
    if (localData) {
      try {
        storedData = JSON.parse(localData);
      } catch {
        storedData = {};
      }
    }

    const params = qs.parse(searchParams?.toString(), { ignoreQueryPrefix: true });

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

    const mergedData = { ...storedData };

    keys.forEach((key) => {
      const value = params[key];
      if (value !== undefined && value !== null) {
        mergedData[key] = key === "application" && !Array.isArray(value)
          ? [value]
          : value;
      }
    });

    setPickedData(mergedData);

  }, []);

  useEffect(() => {
    const urlStep = searchParams.get("step");
    setStep(typeof urlStep === "string" ? urlStep || "" : "");
  }, [searchParams]);

  /* -----------------------------------------
     SAVE LOCAL STORAGE
  ----------------------------------------- */

  useEffect(() => {
    if (!firstRun.current) {
      localStorage.setItem("pf-data", JSON.stringify(pickedData));
    }
  }, [pickedData]);

  /* -----------------------------------------
      QUERY STRING
   ----------------------------------------- */

  const getStringifiedQuery = useCallback((data) => {
    return qs.stringify(data || pickedData);
  }, [pickedData]);

  useEffect(() => {

    if (!step) return;

    const query = getStringifiedQuery();

    let path = baseUrl;

    if (step === "inquire") path = `${baseUrl}/inquire`;
    if (step === "results") path = resultPageUrl;

    navigate(`${path}?${query}&step=${step}`, { replace: false });

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

    const currentStep = step ?? searchParams.get("step");
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
      ...(size ? { dim_2_description_fraction: size_height || undefined } : {}),
      machine: device || undefined,
      shape: attachmentValues,
      dim_3_description: vented_hole || undefined,
      thickness: thickness || undefined,
      surface: application || [],
      material_type: backing || undefined,
      isFinalFilter: isResults ? 1 : 0,
    };

    return payload;

  }, [prepareSearchBody, materials, pickedData, step, stepOrder, isResults]);

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

      const res = await apiService.getFilter(payload, {
        signal: controller.signal, // ✅ pass abort signal
      });

      if (res?.apiStatus === 200) {
        setResultsCount(res?.total || 0);
        setAvailableFilters(res?.filters || defaultAvailableFilters);
        if (isResults) {
          setShopifyProductIds(res?.shopify_product_ids || [])
          setFilterWithCount({
            grit: res?.grit_counts || [],
            grain: res?.grain_counts || []

          })
        } else {
          setShopifyProductIds([])
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
     STEP HANDLER
  ----------------------------------------- */

  const pickStep = (nextStep) => {
    setStep(nextStep);
  };

  /* -----------------------------------------
     MATERIAL
  ----------------------------------------- */

  const pickMaterial = useCallback((material, switchDevice = true) => {
    setPickedData((prev) => {
      if (prev.material !== material) {
        return {
          ...prev,
          material,
          size: "",
          size_height: "",
          application: [],
          backing: "",
          center_hole: "",
          center_hole_size: "",
          vented_hole: "",
          attachment: "",
          thickness: "",
          ...(switchDevice && { device: "" }),
        };
      }

      return {
        ...prev,
        material,
      };
    });

    let nextStep = "size";

    if ((material === "Sheets" || material === "Sponges") && switchDevice) {
      nextStep = "use";
    } else if (
      material === "Sponges" &&
      pickedData.device !== "Rectangular Orbital Sander"
    ) {
      nextStep = "thickness";
    }

    pickStep(nextStep);
  },
    [setPickedData, pickedData, pickStep]
  );

  /* -----------------------------------------
     DEVICE
  ----------------------------------------- */

  const pickDevice = (device, switchMaterial = true, switchSize = true) => {
    let material = pickedData?.material;

    setPickedData((prev) => {
      let updatedData = { ...prev };

      // If device changes → reset dependent fields
      if (prev.device !== device) {
        if (switchSize) {
          updatedData.size = "";
          updatedData.thickness = "";
        }

        updatedData.application = [];
        updatedData.attachment = "";
        updatedData.center_hole = "";
        updatedData.center_hole_size = "";
        updatedData.vented_hole = "";

        if (switchMaterial) {
          updatedData.material = "";
        }
      }

      // Set device
      updatedData.device = device;

      // Override material if mapping exists
      if (switchMaterial && devices?.[device]?.material) {
        updatedData.material = devices[device].material;
      }

      return updatedData;
    });

    // Compute material for next step logic (same as original)
    if (switchMaterial) {
      if (devices?.[device]?.material) {
        material = devices[device].material;
      } else {
        material = "";
      }
    }

    let nextStep = "size";

    if (material === "" && device === "Hand Sanding") {
      nextStep = "specmaterial";
    } else if (material === "Sponges" && device === "Hand Sanding") {
      nextStep = "thickness";
    }

    setStep(nextStep);
  };

  /* -----------------------------------------
     SIZE
  ----------------------------------------- */

  const pickSize = (width, height) => {
    setPickedData((prev) => {
      const {
        center_hole,
        center_hole_size,
        vented_hole,
        ...rest
      } = prev;

      return {
        ...rest,
        size: width,
        size_height: height,
        application: [],
        attachment: "",
        backing: "",
        thickness: "",
      };
    });

    const pickedMaterial = pickedData?.material;

    if (["Discs", "Sheets", "Rolls"].includes(pickedMaterial)) {
      setStep("attachment");
    } else if (pickedMaterial === "Belts") {
      setStep("application");
    } else if (pickedMaterial === "Sponges") {
      setStep("thickness");
    }
  };

  /* -----------------------------------------
     ATTACHMENT
  ----------------------------------------- */

  const pickAttachment = (attachment) => {
    setPickedData((prev) => ({
      ...prev,
      attachment,
      center_hole: "",
      center_hole_size: "",
      vented_hole: "",
    }));

    const pickedMaterial = pickedData?.material;

    if (pickedMaterial === "Discs") setStep("centerhole");
    if (pickedMaterial === "Sheets") setStep("ventedhole");
    if (pickedMaterial === "Rolls") setStep("application");
  };


  /* -----------------------------------------
     CENTER HOLE
  ----------------------------------------- */

  const pickCenterHole = (hole) => {
    setPickedData((prev) => ({
      ...prev,
      center_hole: hole,
      center_hole_size: "",
      vented_hole: "",
    }));

    const isNoCenterHole = hole.toLowerCase() === "no center hole";

    setStep(isNoCenterHole ? "ventedhole" : "centerholesize");
  };

  const pickCenterHoleSize = (size) => {
    setPickedData((prev) => ({
      ...prev,
      center_hole_size: size,
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
    setPickedData((prev) => ({ ...prev, application }));

    const isSpongesOrHandSanding = pickedData?.material === "Sponges" || pickedData?.device === "Hand Sanding";

    setStep(isSpongesOrHandSanding ? "results" : "backing");
  }, [pickedData, setPickedData, pickStep]);

  /* -----------------------------------------
     BACKING
  ----------------------------------------- */

  const pickBackingMaterial = useCallback((mat) => {
    setPickedData((prev) => ({
      ...prev,
      backing: mat,
    }));

    if (pickedData?.material === "Belts") {
      setStep(resultsCount ? "results" : "inquire");
    } else {
      setStep("results");
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
      setStep('application');
    } else {
      setStep('ventedhole');
    }
  };

  /* -----------------------------------------
     RESET
  ----------------------------------------- */

  const resetData = (redirect = baseUrl) => {
    setPickedData({});
    setStep("")
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


  const getSizes = () => DataService.getSizes(pickedData);

  const getThicknesses = () => DataService.getThicknesses();

  const getAttachments = useCallback(() => {
    return DataService.getAttachments(pickedData);
  }, [pickedData, sizes, materials]);

  const getCenterHoles = () => DataService.getCenterHoles(pickedData);

  const getCenterHoleSizes = () => DataService.getCenterHoleSizes();

  const getOtherCenterHoleSizes = () => DataService.getOtherCenterHoleSizes();

  const getVentedHoles = () => DataService.getVentedHoles(pickedData);

  const getBackingMaterials = () => DataService.getBackingMaterials(pickedData);




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