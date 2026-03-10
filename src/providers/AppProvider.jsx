import React, {
  createContext,
  useState,
  useEffect,
  useRef,
  useCallback
} from "react";

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
  defaultAppValue
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

  const [availableFilters, setAvailableFilters] = useState(defaultAvailableFilters);
  const [selectedFilters, setSelectedFilters] = useState("");

  const [filtersLoading, setFiltersLoading] = useState(false);

  const firstRun = useRef(true);

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

    const params = qs.parse(window.location.search, {
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

  /* -----------------------------------------
     SAVE LOCAL STORAGE
  ----------------------------------------- */

  useEffect(() => {

    if (!firstRun.current) {
      localStorage.setItem("pf-data", JSON.stringify(pickedData));
    }

  }, [pickedData]);

  /* -----------------------------------------
     SEARCH BODY
  ----------------------------------------- */

  const prepareSearchBody = useCallback(() => {

    const params = qs.parse(window.location.search, {
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

  }, [pickedData]);

  /* -----------------------------------------
     FETCH RESULTS
  ----------------------------------------- */

  const fetchResults = useCallback(async () => {

    if (firstRun.current) return;

    const body = prepareSearchBody();

    setFiltersLoading(true);

    try {

      const res = await fetch("/api/search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
      });

      const data = await res.json();

      setResultsCount(data?.total || 0);
      setAvailableFilters(data?.filters || defaultAvailableFilters);

    } catch (error) {

      console.error(error);

    } finally {

      setFiltersLoading(false);

    }

  }, [prepareSearchBody]);

  // useEffect(() => {
  //   fetchResults();
  // }, [pickedData, fetchResults]);

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

  const pickMaterial = (material) => {

    setSelectedFilters("");

    setPickedData((prev) => ({
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
      thickness: ""
    }));

    setStep("size");

  };

  /* -----------------------------------------
     DEVICE
  ----------------------------------------- */

  const pickDevice = (device) => {

    setSelectedFilters("");

    setPickedData((prev) => ({
      ...prev,
      device,
      size: "",
      thickness: "",
      application: [],
      attachment: "",
      center_hole: "",
      center_hole_size: "",
      vented_hole: ""
    }));

    setStep("size");

  };

  /* -----------------------------------------
     SIZE
  ----------------------------------------- */

  const pickSize = (width, height) => {

    setSelectedFilters("");

    setPickedData((prev) => ({
      ...prev,
      size: width,
      size_height: height,
      center_hole: "",
      center_hole_size: "",
      vented_hole: "",
      application: [],
      attachment: "",
      backing: "",
      thickness: ""
    }));

    setStep("attachment");

  };

  /* -----------------------------------------
     ATTACHMENT
  ----------------------------------------- */

  const pickAttachment = (attachment) => {

    setSelectedFilters("");

    setPickedData((prev) => ({
      ...prev,
      attachment,
      center_hole: "",
      center_hole_size: "",
      vented_hole: ""
    }));

    setStep("centerhole");

  };

  /* -----------------------------------------
     CENTER HOLE
  ----------------------------------------- */

  const pickCenterHole = (hole) => {

    setSelectedFilters("");

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

    setSelectedFilters("");

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

    setSelectedFilters("");

    setPickedData((prev) => ({
      ...prev,
      vented_hole: hole
    }));

    setStep("application");

  };

  /* -----------------------------------------
     APPLICATION
  ----------------------------------------- */

  const pickApplication = (application) => {

    setSelectedFilters("");

    setPickedData((prev) => ({
      ...prev,
      application
    }));

    setStep("backing");

  };

  /* -----------------------------------------
     BACKING
  ----------------------------------------- */

  const pickBackingMaterial = (mat) => {

    setSelectedFilters("");

    setPickedData((prev) => ({
      ...prev,
      backing: mat
    }));

    setStep("results");

  };

  /* -----------------------------------------
     THICKNESS
  ----------------------------------------- */

  const pickThickness = (thickness) => {

    setSelectedFilters("");

    setPickedData((prev) => ({
      ...prev,
      thickness
    }));

  };

  /* -----------------------------------------
     FILTERS
  ----------------------------------------- */

  const pickAdditionalFilters = (filters) => {

    setSelectedFilters(filters);
    pickPage(1);

  };

  /* -----------------------------------------
     PAGE
  ----------------------------------------- */

  const pickPage = (page) => {

    const query = getStringifiedQuery();

    window.location.href =
      `/pages/product-finder/results/?${query}&page=${page}`;

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

  const resetData = () => {

    setPickedData({});
    setSelectedFilters("");
    setStep("");

    localStorage.removeItem("pf-data");

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
    if (!pickedData?.material) return [];
    return materials[pickedData.material]?.Sizes || [];
  };

  const getThicknesses = () => thicknesses || [];

  const getAttachments = () => {

    if (!pickedData?.material) return {};

    return materials[pickedData.material]?.["Attachment Types"] || {};

  };

  const getCenterHoles = () => {

    if (!pickedData?.material) return {};

    return materials[pickedData.material]?.["Center Holes"] || {};

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
    selectedFilters,

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

    pickPage,
    pickAdditionalFilters,

    loadProductInfo,

    resetData,
    replaceData,
    resetSomeData

  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );

};

export default AppProvider;