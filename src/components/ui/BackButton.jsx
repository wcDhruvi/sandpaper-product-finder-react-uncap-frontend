import React from "react";
import useProgressSteps from "../../hooks/useProgressSteps";
import BackArrow from "../icons/BackArrow";

function BackButton() {

    const { prevStep } = useProgressSteps();
    return (
        <button
            onClick={prevStep}
            className="pf-flex pf-items-center pf-justify-center pf-gap-[5px] pf-pt-2 pf-pb-2 pf-pr-4 pf-pl-2 pf-rounded-[3px] pf-bg-white"
        >
            <BackArrow />

            <span className="pf-text-[#004890] pf-text-center pf-font-normal pf-text-[14px] pf-leading-[20px]">
                Back
            </span>
        </button>
    );
}

export default BackButton;