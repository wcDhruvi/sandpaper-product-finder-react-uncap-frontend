import React, { useEffect, useState } from "react";
import StepCircle from "./ui/StepCircle";
import ProgressCircle from "./ui/ProgressCircle";
import IconRefresh from "./icons/IconRefresh";
import { useAppContext } from "../hooks/useAppContext";
import useProgressSteps from "../hooks/useProgressSteps";
import AccordionItem from "./ui/AccordionItem";
import { Link } from "react-router-dom";
import { baseUrl } from "../utils/Constants";

/**
 * FinderProgress Component
 * 
 * Displays the current progress in the product finder.
 * - Desktop: Horizontal stepper with circles and titles.
 * - Mobile (Default): Circular progress indicator with current/next step labels.
 * - Results Page (Mobile): Condensed "Details" accordion summarizing selections.
 */
function FinderProgress({ isResultPage }) {
  const {
    device,
    pickedData,
    initialized,
    resetData,
    step,
    getStringifiedQuery
  } = useAppContext();

  const { currentStep, nextSteps } = useProgressSteps();
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  if (!initialized) {
    return null;
  }

  /**
   * Helper to resolve the display value for each step in the detail summary.
   */
  const getStepValue = (s) => {
    let index = s.step;
    // Map internal step aliases to pickedData keys
    if (s.step === "1") index = device ? "device" : "material";
    if (s.step === "specmaterial") index = "material";
    if (s.step === "centerhole") index = "center_hole";
    if (s.step === "ventedhole") index = "vented_hole";

    const val = pickedData?.[index];
    if (!val) return "-";

    // Special formatting for Size step
    if (s.step === "size") {
      const height = pickedData.size_height ? ` x ${pickedData.size_height}` : "";
      const unit = pickedData.material === "Rolls" ? "m" : "";
      return `${pickedData.size}${height}${unit}`;
    }

    // Special formatting for Application step
    if (s.step === "application") {
      if (Array.isArray(val) && val?.length > 0) return val.join(", ")
      else return "-";
    }

    return val.toString();
  };

  return (
    <>
      {/* ── MOBILE RESULTS VIEW (Accordion - only shown on result page and < md) ── */}
      {isResultPage && (
        <div className="pf-w-full pf-flex pf-flex-col md:pf-hidden">
          <div className="pf-flex pf-items-start pf-justify-between pf-w-full pf-border-b pf-px-[15px]">
            <div className="pf-flex-1">
              <AccordionItem
                title="Details"
                isOpen={isDetailsOpen}
                onClick={() => setIsDetailsOpen(!isDetailsOpen)}
                className="pf-flex-row-reverse !pf-justify-end !pf-py-[10px]"
              >
                <div className="pf-grid pf-grid-cols-1 sm:pf-grid-cols-2 pf-gap-[10px] pf-py-[10px]">
                  {nextSteps.map((s, i) => {
                    const value = getStepValue(s);
                    const url = getStringifiedQuery() + "&step=" + s.step;
                    return (
                      <Link key={i} className="pf-flex pf-flex-col pf-gap-[1px] " to={`${baseUrl}?` + url}
                        data-step={step}>
                        <span className="pf-text-[#7F7F7F] pf-text-[12px] pf-font-bold pf-uppercase">
                          {s.title}
                        </span>
                        <span className="pf-text-black pf-text-[14px] pf-font-medium">
                          {value}
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </AccordionItem>
            </div>

            {/* Refresh button positioned next to accordion header */}
            <button
              className="pf-flex pf-w-[40px] pf-h-[40px] pf-min-w-[40px] pf-items-center pf-justify-center pf-bg-[#F6F6F6] pf-ml-[10px] pf-mt-[5px]"
              onClick={() => resetData()}
              aria-label="Reset Finder"
            >
              <IconRefresh />
            </button>
          </div>
        </div>
      )}

      {/* ── DESKTOP STEPPER VIEW (Shown on md+ for results, or lg+ for standard steps) ── */}
      <div className={`pf-flex pf-items-center xl:pf-gap-[20px] lg:pf-gap-[15px] pf-flex-wrap xl:pf-flex-nowrap pf-flex-1 pf-min-w-0 pf-justify-around 
        ${isResultPage ? "max-md:pf-hidden" : "max-lg:pf-hidden"}`}
      >
        {nextSteps.map((nextStep, i) => {
          let stepIndex = nextStep.step;
          if (nextStep.step === "1") stepIndex = device ? "device" : "material";
          if (nextStep.step === "specmaterial") stepIndex = "material";
          if (nextStep.step === "centerhole") stepIndex = "center_hole";
          if (nextStep.step === "ventedhole") stepIndex = "vented_hole";

          return (
            <StepCircle
              key={`${nextStep.title}-${i}`}
              num={i + 1}
              title={nextStep.title}
              step={nextStep.step}
              index={stepIndex}
            />
          );
        })}
      </div>

      {/* ── MOBILE PROGRESS CIRCLE (Only for non-result pages on smaller screens) ── */}
      {!isResultPage && (
        <div className="pf-flex pf-w-full pf-px-[15px] pf-py-[10px] pf-gap-[15px] pf-items-center lg:pf-hidden">
          {/* Progress Circle Visual */}
          <div className="pf-w-[60px] pf-h-[60px] pf-flex-shrink-0">
            <ProgressCircle
              current={step === "use" ? 1 : currentStep}
              total={nextSteps.length}
            />
          </div>

          {/* Current/Next Step Labels */}
          <div className="pf-flex pf-gap-[2px] pf-flex-1 pf-flex-col">
            <div className="pf-text-[#000] pf-text-[14px] pf-leading-[22px] pf-font-bold">
              {step === "use" ? "" : (nextSteps[currentStep]?.title || "")}
            </div>
            <div className="pf-text-[#7F7F7F] pf-text-[14px] pf-leading-[22px] pf-font-normal pf-flex-[1_0_0]">
              {currentStep + 1 < nextSteps.length ? (
                <span>Next: {nextSteps[currentStep + 1].title}</span>
              ) : (
                <span>Final step</span>
              )}
            </div>
          </div>

          {/* Refresh Button for Mobile Mobile Stepper */}
          <button
            className="pf-flex pf-w-[40px] pf-h-[40px] pf-min-w-[40px] pf-items-center pf-justify-center pf-bg-[#F6F6F6] sm:pf-flex"
            onClick={() => resetData()}
            aria-label="Restart Finder"
          >
            <IconRefresh />
          </button>
        </div>
      )}
    </>
  );
}

export default FinderProgress;