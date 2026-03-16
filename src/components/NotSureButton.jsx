import React from "react";
import useProgressSteps from "../hooks/useProgressSteps";
import NextArrow from "../utils/icons/NextArrow";

function NotSureButton() {

    const { nextStep } = useProgressSteps();
    return (
        <button
            onClick={nextStep}
            className="pf-flex pf-items-center pf-justify-center pf-gap-[5px] pf-pt-2 pf-pb-2 pf-pr-2 pf-pl-4 pf-rounded-[3px] pf-bg-white"
        >
            <span className="pf-text-[#004890] pf-text-center pf-font-normal pf-text-[14px] pf-leading-[20px] pf-font-[Din_Pro]">
                I'm not sure
            </span>
            <NextArrow />
        </button>
    );
}

export default NotSureButton;