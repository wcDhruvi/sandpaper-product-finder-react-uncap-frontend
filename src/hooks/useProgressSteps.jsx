import { useState, useEffect, useCallback } from "react";
import { useAppContext } from "./useAppContext";
import { STEP_ALIASES } from "../utils/Common";

function useProgressSteps() {
  const { step, pickStep, stepOrderFull, stepOrder } = useAppContext();

  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    if (!stepOrderFull.length) return;

    // ── Check if the step exists directly in stepOrder ──
    const existsInStepOrder = stepOrderFull.some((s) => s.step === step);

    if (existsInStepOrder) {
      // Step is its own step — find it directly
      const index = stepOrderFull.findIndex((s) => s.step === step);
      setCurrentStep(index !== -1 ? index : 0);
    } else {
      // Step is a sub-step — resolve via STEP_ALIASES
      const resolvedStep = STEP_ALIASES[step] || step;
      const index = stepOrderFull.findIndex((s) => s.step === resolvedStep);
      setCurrentStep(index !== -1 ? index : 0);
    }

  }, [step, stepOrderFull]);

  /* -------------------------
      PREVIOUS STEP
    ------------------------- */
  const prevStep = useCallback(() => {
    const prev = stepOrderFull[currentStep - 1];
    if (prev) pickStep(prev.step)
    else pickStep("1");
  }, [currentStep, stepOrderFull, pickStep]);

  /* -------------------------
    NEXT STEP
  ------------------------- */
  const nextStep = useCallback(() => {
    if (currentStep < stepOrderFull.length) {
      const next = stepOrderFull[currentStep + 1];
      if (next) pickStep(next.step);
    }
  }, [currentStep, stepOrderFull, pickStep]);

  return {
    currentStep,
    nextSteps: stepOrderFull,
    stepOrder,
    prevStep,
    nextStep,
    step,
  };
}

export default useProgressSteps;