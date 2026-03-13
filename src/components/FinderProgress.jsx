import React, { useEffect, useState } from "react";


import StepCircle from "./StepCircle";
import ProgressCircle from "./ProgressCircle";
import IconRefresh from "../utils/icons/IconRefresh";
import { useAppContext } from "../hooks/useAppContext";
import useProgressSteps from "../hooks/useProgressSteps";

function FinderProgress() {

  const {
    device,
    initialized,
    resetData,
  } = useAppContext();

  const [currentStep, nextSteps] = useProgressSteps();

  if (!initialized) {
    return null;
  }

  return (
    <>
      <div className="pf-flex pf-items-center xl:pf-gap-[20px] lg:pf-gap-[15px] lg:pf-flex-nowrap pf-flex-1 pf-min-w-0 max-lg:pf-hidden pf-justify-center">
        {nextSteps.map((nextStep, i) => {

          if (nextStep.step === "1") {
            return (
              <StepCircle
                key={nextStep.title}
                num={i + 1}
                title={nextStep.title}
                step="1"
                index={device ? "device" : "material"}
              />
            );
          }

          if (nextStep.step === "specmaterial") {
            return (
              <StepCircle
                key={nextStep.title}
                num={i + 1}
                title={nextStep.title}
                step={nextStep.step}
                index="material"
              />
            );
          }

          if (nextStep.step === "centerhole") {
            return (
              <StepCircle
                key={nextStep.title}
                num={i + 1}
                title={nextStep.title}
                step={nextStep.step}
                index="center_hole"
              />
            );
          }

          if (nextStep.step === "ventedhole") {
            return (
              <StepCircle
                key={nextStep.title}
                num={i + 1}
                title={nextStep.title}
                step={nextStep.step}
                index="vented_hole"
              />
            );
          }

          return (
            <StepCircle
              key={nextStep.title}
              num={i + 1}
              title={nextStep.title}
              step={nextStep.step}
              index={nextStep.step}
            />
          );

        })}
      </div>


      {/* MOBILE PROGRESS */}
      <div className="pf-flex pf-w-full pf-px-[15px] pf-py-[10px] pf-gap-[15px] lg:pf-hidden">


        {/* Circle */}
        <div className="pf-w-[60px] pf-h-[60px] pf-flex-shrink-0">
          <ProgressCircle
            current={currentStep}
            total={nextSteps.length}
          />
        </div>

        {/* Step Text */}
        <div className="pf-flex pf-items-center pf-gap-[10px] pf-flex-[1_0_0]">

          <div className="pf-text-[#000] pf-text-[14px] pf-leading-[22px] pf-font-bold">
            {currentStep > 1 ? nextSteps[currentStep - 1].title : ""}
          </div>

          <div className="pf-flex-[1_0_0] pf-text-[#7F7F7F] pf-text-[14px] pf-leading-[22px] pf-font-normal">

            {currentStep < nextSteps.length ? (
              <span>
                Next: {nextSteps[currentStep].title}
              </span>
            ) : (
              <span>Final step</span>
            )}

          </div>

          {/* Refresh */}
          <button
            className="pf-flex pf-w-[40px] pf-h-[40px] pf-min-w-[40px] pf-items-center pf-justify-center pf-bg-[#F6F6F6] sm:pf-flex"
            onClick={() => resetData()}
          >
            <IconRefresh />
          </button>

        </div>
      </div>
    </>
  );
}

export default FinderProgress;