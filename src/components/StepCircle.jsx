import React from "react";
import SizeFormat from "./SizeFormat";
import { useAppContext } from "../hooks/useAppContext";
import ThickIcon from "../utils/icons/TickIcon";
import { Link, useLocation } from "react-router-dom";
import { baseUrl } from "../utils/Constent";

function StepCircle({ title, index, step, num }) {

  const { pickedData, getStringifiedQuery } = useAppContext();
  const location = useLocation();

  const params = new URLSearchParams(location.search);
  const pathname = location.pathname;

  const currentStep = params.get("step") || "";
  const isResults = pathname === `${baseUrl}/results/`;

  const isCurrent = currentStep === step;

  const isPicked =
    pickedData &&
    pickedData[index] &&
    pickedData[index].toString().length > 0;

  const url = getStringifiedQuery() + "&step=" + step;

  return (
    <>
      <Link
        to={`${baseUrl}?` + url}
        data-step={step}
        className="pf-flex pf-items-center pf-gap-[10px] pf-no-underline pf-group"
      >

        {!isResults && (

          <span
            className={`
            pf-flex  pf-justify-center
            pf-w-[24px] pf-h-[24px]
            pf-min-w-[24px] pf-min-h-[24px]
            pf-rounded-full
            pf-text-[14px] pf-font-bold pf-leading-[20px]
            pf-transition-all pf-duration-200
            
            ${isPicked && !isCurrent
                ? "pf-bg-[#004890] pf-text-white pf-items-center"
                : isCurrent
                  ? "pf-border-solid pf-border pf-border-[#004890] pf-bg-transparent pf-text-[#004890]"
                  : "pf-bg-[#F6F6F6] pf-text-[#7F7F7F] group-hover:pf-border-solid group-hover:pf-border group-hover:pf-border-[#004890] group-hover:pf-text-[#004890] group-hover:pf-bg-transparent"
              }
          `}
          >
            {isPicked && !isCurrent ? <ThickIcon /> : num}
          </span>

        )}

        <span className="pf-flex pf-flex-col pf-gap-[2px]">

          <span
            className={`
            pf-text-[14px] pf-font-bold pf-leading-[20px]
            pf-transition-colors
    pf-break-words pf-break-normal

            ${isCurrent
                ? "pf-text-[#004890]"
                : isPicked
                  ? "pf-text-[#666365] group-hover:pf-text-[#004890]"
                  : "pf-text-[#7F7F7F]"
              }

            ${!isPicked ? "group-hover:pf-text-[#004890]" : ""}
          `}
          >
            {title}
          </span>

          <span className={`pf-text-[18px] pf-font-bold pf-leading-[26px] pf-break-words pf-break-normal ${isCurrent ? 'pf-text-[#004890]' : 'pf-text-black'}`}>

            {step === "size" && (
              <>
                {pickedData?.material === "Rolls" && pickedData?.size ? (
                  <SizeFormat size={`${pickedData.size}x${pickedData.size_height}m`} />
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

      </Link>
    </>
  );
}

export default StepCircle;