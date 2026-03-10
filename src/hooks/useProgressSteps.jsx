import { useEffect, useState } from "react";
import { useAppContext } from "./useAppContext";

function useProgressSteps() {

  const { step, device, material } = useAppContext();

  const [currentStep, setCurrentStep] = useState(1);
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
      steps.push({
        step: "specmaterial",
        title: "Material"
      });
    }

    // SIZE STEP (Sponges)
    if (
      material === "Sponges" &&
      (device === "Disc Orbital Sander" ||
        device === "Rectangular Orbital Sander")
    ) {
      steps.push({
        step: "size",
        title: "Size"
      });

      if (step === "size") {
        setCurrentStep(steps.length - 1);
      }
    }

    // SIZE STEP (other materials)
    if (
      material !== "Sponges" &&
      (device !== "Hand Sanding" || material === "Sheets")
    ) {
      steps.push({
        step: "size",
        title: "Size"
      });

      if (step === "size") {
        setCurrentStep(steps.length - 1);
      }
    }

    // ATTACHMENT
    if (material !== "Belts" && material !== "Sponges") {
      steps.push({
        step: "attachment",
        title: "Attachment Type"
      });

      if (step === "attachment") {
        setCurrentStep(steps.length - 1);
      }
    }

    // THICKNESS
    if (
      material === "Sponges" ||
      (!material && device === "Hand Sanding")
    ) {
      steps.push({
        step: "thickness",
        title: "Thickness"
      });

      if (step === "thickness") {
        setCurrentStep(steps.length - 1);
      }
    }

    // CENTER HOLE
    if (
      material !== "Belts" &&
      material !== "Sheets" &&
      material !== "Rolls" &&
      material !== "Sponges" &&
      device !== "Hand Sanding"
    ) {
      steps.push({
        step: "centerhole",
        title: "Hole Configuration"
      });

      if (step === "centerhole") {
        setCurrentStep(steps.length - 1);
      }
    }

    // VENTED HOLE
    if (
      material === "Sheets" ||
      (material === "Sponges" && device !== "Hand Sanding")
    ) {
      steps.push({
        step: "ventedhole",
        title: "Hole Configuration"
      });

      if (step === "ventedhole") {
        setCurrentStep(steps.length - 1);
      }
    }

    // APPLICATIONS
    steps.push({
      step: "application",
      title: "Applications"
    });

    if (step === "application") {
      setCurrentStep(steps.length - 1);
    }

    // BACKING MATERIAL
    if (
      material !== "Sponges" &&
      device !== "Hand Sanding"
    ) {
      steps.push({
        step: "backing",
        title: "Backing Material"
      });

      if (step === "backing") {
        setCurrentStep(steps.length - 1);
      }
    }

    setNextSteps(steps);

  }, [step, device, material]);

  return [currentStep, nextSteps];
}

export default useProgressSteps;