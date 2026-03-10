import React from "react";
import SizeFormat from "./SizeFormat";
import { useAppContext } from "../hooks/useAppContext";
import ThickIcon from "../utils/icons/TickIcon";

function StepCircle({ title, index, step, num }) {

  const { pickedData, getStringifiedQuery } = useAppContext();

  const params = new URLSearchParams(window.location.search);
  const pathname = window.location.pathname;

  const currentStep = params.get("step") || "";
  const isResults = pathname === "/product-finder/results/";

  const isCurrent = currentStep === step;

  const isPicked =
    pickedData &&
    pickedData[index] &&
    pickedData[index].toString().length > 0;

  const url = getStringifiedQuery() + "&step=" + step;

  return (
    <a
      href={"/pages/product-finder/?" + url}
      data-step={step}
      className={`finder-step 
        ${isCurrent ? "finder-step-current" : ""} 
        ${isPicked && !isCurrent ? "finder-step-completed" : ""}`}
    >
      {!isResults && (
        <span className="finder-step-circle">
          <span className={isPicked && !isCurrent ? "hidden" : ""}>
            {num}
          </span>

          {isPicked && !isCurrent && <ThickIcon />}
        </span>
      )}

      <span className="finder-step-content">

        <span
          className="finder-step-title"

        >
          {title}
        </span>

        <span className="finder-step-value">

          {step === "size" && (
            <>
              {pickedData?.material === "Rolls" && pickedData?.size ? (
                <SizeFormat
                  size={`${pickedData.size}x${pickedData.size_height}m`}
                />
              ) : pickedData?.size ? (
                <SizeFormat
                  size={
                    pickedData.size +
                    (pickedData?.size_height
                      ? "x" + pickedData.size_height
                      : "")
                  }
                />
              ) : null}

            </>
          )}

          {step === "application" && pickedData?.application && (
            <>
              {pickedData.application.length} selected
            </>
          )}

          {step !== "size" &&
            step !== "application" &&
            pickedData?.[index] && (
              <>
                {pickedData[index]}
              </>
            )}

        </span>

      </span>
    </a>
  );
}

export default StepCircle;