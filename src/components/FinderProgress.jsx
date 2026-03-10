import React, { useEffect, useState } from "react";


import StepCircle from "./StepCircle";
import ProgressCircle from "./ProgressCircle";
import IconRefresh from "../utils/icons/IconRefresh";
import { useAppContext } from "../hooks/useAppContext";
import useProgressSteps from "../hooks/useProgressSteps";

function FinderProgress() {

  const {
    step,
    device,
    initialized,
    resetData,
    getStringifiedQuery
  } = useAppContext();

  const [currentStep, nextSteps] = useProgressSteps();

  const pathname = window.location.pathname;
  const isResults = pathname.startsWith("/product-finder/results/");

  if (!initialized) {
    return null;
  }

  return (
    <>
      <div className="finder-progress-section ">
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


      <div className="sm-finder-progress-section">
        <div className="progress-circle-div">
          <ProgressCircle
            current={currentStep}
            total={nextSteps.length}
          />
        </div>
        <div className="sm-step-div">
          <div className="sm-current-step" >
            {currentStep > 1 ? nextSteps[currentStep - 1].title : ""}
          </div>

          <div className="sm-next-step">

            {currentStep < nextSteps.length ? (
              <span >
                Next:  {nextSteps[currentStep].title}
                </span>
            ) : (
              <span>Final step</span>
            )}

          </div>
          <button className="refresh-icon-btn sm-refresh-btn" onClick={resetData}>
            <IconRefresh />
          </button>
        </div>
      </div>
    </>
  );
}

export default FinderProgress;