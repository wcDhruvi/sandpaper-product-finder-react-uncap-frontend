import React from "react";
import ArrowDown from "../icons/ArrowDown";

const SpecPopup = ({ children, className = "" }) => {
    return (
        <span
            className={`pf-absolute pf-left-[80%] -pf-translate-x-[85%] sm:pf-left-1/2 pf-bottom-[calc(100%+16px)] sm:pf--translate-x-1/2
      pf-rounded-[3px] pf-p-2
      pf-bg-[#004890] pf-text-white pf-font-[700] pf-text-[12px]
      leading-[18px]
      pf-w-screen  pf-max-w-[200px] sm:pf-max-w-[344px]
      pf-opacity-0 pf-translate-y-2
      pf-transition pf-duration-200 pf-ease-out
      pf-pointer-events-none pf-z-50
      group-hover:pf-opacity-100 group-hover:pf-translate-y-0
      ${className}`}
        >
            {children}

            <ArrowDown className="pf-absolute pf--bottom-2 pf-left-[83%] -pf-translate-x-[80%]  sm:pf-left-1/2 sm:pf--translate-x-1/2" />
        </span>
    );
};

export default SpecPopup;