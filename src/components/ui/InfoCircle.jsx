import React from "react";
import Questionmark from "../icons/Questionmark";
import SpecPopup from "./SpecPopup";
function InfoCircle({ onClick, text }) {

    const handleClick = () => {
        onClick?.();
    };

    return (
        <span
            onClick={handleClick}
            className="pf-relative pf-flex pf-items-center pf-justify-center pf-w-[30px] pf-h-[30px] pf-rounded-full pf-bg-white pf-cursor-pointer pf-group"
        >
            <Questionmark />

            {text && (
                <SpecPopup className="pf-text-left sm:pf-max-w-[392px]">
                    <div dangerouslySetInnerHTML={{ __html: text }} />
                </SpecPopup>
            )}
        </span>
    );
}

export default InfoCircle;