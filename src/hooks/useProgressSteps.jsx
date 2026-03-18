import { useEffect, useState, useCallback } from "react";
import { useAppContext } from "./useAppContext";

function useProgressSteps() {
  const { step, device, material, pickStep } = useAppContext();
  
  const [currentStep, setCurrentStep] = useState(1);
  const [nextSteps, setNextSteps] = useState([]);

  useEffect(() => {
    const stepsArr = [];

    stepsArr.push({
      step: "1",
      title: device ? "Device" : "Material",
    });

    if (
      device === "Hand Sanding" ||
      device === "Rectangular Orbital Sander"
    ) {
      stepsArr.push({
        step: "specmaterial",
        title: "Material",
      });
    }

    if (
      material === "Sponges" &&
      (device === "Disc Orbital Sander" ||
        device === "Rectangular Orbital Sander")
    ) {
      stepsArr.push({ step: "size", title: "Size" });
      if (step === "size") setCurrentStep(stepsArr.length - 1);
    }

    if (
      material !== "Sponges" &&
      (device !== "Hand Sanding" || material === "Sheets")
    ) {
      stepsArr.push({ step: "size", title: "Size" });
      if (step === "size") setCurrentStep(stepsArr.length - 1);
    }

    if (material !== "Belts" && material !== "Sponges") {
      stepsArr.push({
        step: "attachment",
        title: "Attachment Type",
      });
      if (step === "attachment") setCurrentStep(stepsArr.length - 1);
    }

    if (material === "Sponges" || (!material && device === "Hand Sanding")) {
      stepsArr.push({
        step: "thickness",
        title: "Thickness",
      });
      if (step === "thickness") setCurrentStep(stepsArr.length - 1);
    }

    if (
      material !== "Belts" &&
      material !== "Sheets" &&
      material !== "Rolls" &&
      material !== "Sponges" &&
      device !== "Hand Sanding"
    ) {
      stepsArr.push({
        step: "centerhole",
        title: "Hole Configuration",
      });
      if (step === "centerhole" || step === 'ventedhole' || step === "centerholesize") setCurrentStep(stepsArr.length - 1);
    }

    if (
      material === "Sheets" ||
      (material === "Sponges" && device !== "Hand Sanding")
    ) {
      stepsArr.push({
        step: "ventedhole",
        title: "Hole Configuration",
      });
      if (step === "ventedhole") setCurrentStep(stepsArr.length - 1);
    }

    stepsArr.push({
      step: "application",
      title: "Applications",
    });
    if (step === "application") setCurrentStep(stepsArr.length - 1);

    if (material !== "Sponges" && device !== "Hand Sanding") {
      stepsArr.push({
        step: "backing",
        title: "Backing Material",
      });
      if (step === "backing") setCurrentStep(stepsArr.length - 1);
    }

    setNextSteps(stepsArr);
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