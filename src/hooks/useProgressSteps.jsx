// import { useEffect, useState, useCallback } from "react";
// import { useAppContext } from "./useAppContext";

// function useProgressSteps() {

//   const { step, device, material, pickStep } = useAppContext();

//   console.log("step",step)

//   const [currentStep, setCurrentStep] = useState(1);
//   const [nextSteps, setNextSteps] = useState([]);

//   useEffect(() => {

//     const steps = [];

//     // STEP 1
//     steps.push({
//       step: "1",
//       title: device ? "Device" : "Material"
//     });

//     // MATERIAL STEP
//     if (
//       device === "Hand Sanding" ||
//       device === "Rectangular Orbital Sander"
//     ) {
//       steps.push({
//         step: "specmaterial",
//         title: "Material"
//       });
//     }

//     // SIZE STEP (Sponges)
//     if (
//       material === "Sponges" &&
//       (device === "Disc Orbital Sander" ||
//         device === "Rectangular Orbital Sander")
//     ) {
//       steps.push({
//         step: "size",
//         title: "Size"
//       });

//       if (step === "size") {
//         setCurrentStep(steps.length - 1);
//       }
//     }

//     // SIZE STEP (other materials)
//     if (
//       material !== "Sponges" &&
//       (device !== "Hand Sanding" || material === "Sheets")
//     ) {
//       steps.push({
//         step: "size",
//         title: "Size"
//       });

//       if (step === "size") {
//         setCurrentStep(steps.length - 1);
//       }
//     }

//     // ATTACHMENT
//     if (material !== "Belts" && material !== "Sponges") {
//       steps.push({
//         step: "attachment",
//         title: "Attachment Type"
//       });

//       if (step === "attachment") {
//         setCurrentStep(steps.length - 1);
//       }
//     }

//     // THICKNESS
//     if (
//       material === "Sponges" ||
//       (!material && device === "Hand Sanding")
//     ) {
//       steps.push({
//         step: "thickness",
//         title: "Thickness"
//       });

//       if (step === "thickness") {
//         setCurrentStep(steps.length - 1);
//       }
//     }

//     // CENTER HOLE
//     if (
//       material !== "Belts" &&
//       material !== "Sheets" &&
//       material !== "Rolls" &&
//       material !== "Sponges" &&
//       device !== "Hand Sanding"
//     ) {
//       steps.push({
//         step: "centerhole",
//         title: "Hole Configuration"
//       });

//       if (step === "centerhole") {
//         setCurrentStep(steps.length - 1);
//       }
//     }

//     // VENTED HOLE
//     if (
//       material === "Sheets" ||
//       (material === "Sponges" && device !== "Hand Sanding")
//     ) {
//       steps.push({
//         step: "ventedhole",
//         title: "Hole Configuration"
//       });

//       if (step === "ventedhole") {
//         setCurrentStep(steps.length - 1);
//       }
//     }

//     // APPLICATIONS
//     steps.push({
//       step: "application",
//       title: "Applications"
//     });

//     if (step === "application") {
//       setCurrentStep(steps.length - 1);
//     }

//     // BACKING MATERIAL
//     if (
//       material !== "Sponges" &&
//       device !== "Hand Sanding"
//     ) {
//       steps.push({
//         step: "backing",
//         title: "Backing Material"
//       });

//       if (step === "backing") {
//         setCurrentStep(steps.length - 1);
//       }
//     }

//     setNextSteps(steps);

//   }, [step, device, material]);

//   /* -------------------------
//     PREVIOUS STEP
//  ------------------------- */

//   const prevStep = useCallback(() => {

//     if (currentStep > 0) {
//       const prev = nextSteps[currentStep - 1];
//       if (prev) pickStep(prev.step);
//     }

//   }, [currentStep, nextSteps, pickStep]);

//   /* -------------------------
//      NEXT STEP
//   ------------------------- */

//   const nextStep = useCallback(() => {

//     if (currentStep + 1 < nextSteps.length) {
//       const next = nextSteps[currentStep + 1];
//       if (next) pickStep(next.step);
//     }

//   }, [currentStep, nextSteps, pickStep]);


//   return {
//     currentStep,
//     nextSteps,
//     prevStep,
//     nextStep
//   };
// }

// export default useProgressSteps;

import { useEffect, useState, useCallback } from "react";
import { useSearchParams } from "react-router-dom"; // or your router
import { useAppContext } from "./useAppContext";

function useProgressSteps() {
  const { device, material, pickStep } = useAppContext();

  const [searchParams] = useSearchParams();
  const step = searchParams.get("step") || "1"; // ✅ read step from URL

  const [currentStep, setCurrentStep] = useState(0);
  const [nextSteps, setNextSteps] = useState([]);

  useEffect(() => {
    const steps = [];

    // STEP 1
    steps.push({
      step: "1",
      title: device ? "Device" : "Material"
    });

    // MATERIAL STEP
    if (
      device === "Hand Sanding" ||
      device === "Rectangular Orbital Sander"
    ) {
      steps.push({ step: "specmaterial", title: "Material" });
    }

    // SIZE STEP (Sponges)
    if (
      material === "Sponges" &&
      (device === "Disc Orbital Sander" ||
        device === "Rectangular Orbital Sander")
    ) {
      steps.push({ step: "size", title: "Size" });
    }

    // SIZE STEP (other materials)
    if (
      material !== "Sponges" &&
      (device !== "Hand Sanding" || material === "Sheets")
    ) {
      steps.push({ step: "size", title: "Size" });
    }

    // ATTACHMENT
    if (material !== "Belts" && material !== "Sponges") {
      steps.push({ step: "attachment", title: "Attachment Type" });
    }

    // THICKNESS
    if (material === "Sponges" || (!material && device === "Hand Sanding")) {
      steps.push({ step: "thickness", title: "Thickness" });
    }

    // CENTER HOLE
    if (
      material !== "Belts" &&
      material !== "Sheets" &&
      material !== "Rolls" &&
      material !== "Sponges" &&
      device !== "Hand Sanding"
    ) {
      steps.push({ step: "centerhole", title: "Hole Configuration" });
    }

    // VENTED HOLE
    if (
      material === "Sheets" ||
      (material === "Sponges" && device !== "Hand Sanding")
    ) {
      steps.push({ step: "ventedhole", title: "Hole Configuration" });
    }

    // APPLICATIONS
    steps.push({ step: "application", title: "Applications" });

    // BACKING MATERIAL
    if (material !== "Sponges" && device !== "Hand Sanding") {
      steps.push({ step: "backing", title: "Backing Material" });
    }

    // Derive currentStep AFTER steps array is fully built
    const index = steps.findIndex((s) => s.step === step);
    setCurrentStep(index !== -1 ? index : 0);

    setNextSteps(steps);
  }, [step, device, material]);

  /* -------------------------
    PREVIOUS STEP
  ------------------------- */
  const prevStep = useCallback(() => {
    if (currentStep > 0) {
      const prev = nextSteps[currentStep - 1];
      if (prev) pickStep(prev.step);
    }
  }, [currentStep, nextSteps, pickStep]);

  /* -------------------------
    NEXT STEP
  ------------------------- */
  const nextStep = useCallback(() => {
    if (currentStep + 1 < nextSteps.length) {
      const next = nextSteps[currentStep + 1];
      if (next) pickStep(next.step);
    }
  }, [currentStep, nextSteps, pickStep]);

  return { currentStep, nextSteps, prevStep, nextStep, step };
}

export default useProgressSteps;