import React, { useState, useEffect } from 'react'
import { useAppContext } from '../../hooks/useAppContext';
import { twMerge } from "tailwind-merge";
import clsx from "clsx";
import ProgressHeader from '../ui/ProgressHeader';
import InfoCircle from '../ui/InfoCircle';
import NoHole from '../icons/NoHole';
import MultiHole from '../icons/MultiHole';
import Hole5 from '../icons/Hole5';
import Hole6 from '../icons/Hole6';
import Hole8 from '../icons/Hole8';
import NotAvailable from '../NotAvailable';
const HOLE_ICONS = {
    "No holes": NoHole,
    "5": Hole5,
    "6": Hole6,
    "8": Hole8,
    "Multi-Hole": MultiHole,
};

const VentedHolePicker = () => {

    const {
        pickStep,
        pickVentedHole,
        getVentedHoles,
        availableFilters,
        pickedData,
        material,
        device,
    } = useAppContext();

    const holes = getVentedHoles();
    const availableVentedHoles = availableFilters?.["Dim 3 Description"] ?? [];

    const [showNotAvailable, setShowNotAvailable] = useState("");

    const getHoleLabel = (hole) => {
        if (hole === "Festool") return "Festool";
        if (hole === "1") return "1 hole";
        if (/^[0-9]+$/.test(hole)) return `${hole} holes`;
        return hole;
    };

    const getNotAvailableLabel = (hole) => {
        const needsSuffix =
            !hole.includes("holes") && !hole.includes("Festool");
        return needsSuffix ? `${hole} holes` : hole;
    };

    const showIcons =
        device !== "Rectangular Orbital Sander" && material !== "Sheets";

    const sizeBoxClassName = (selectable) =>
        twMerge(
            clsx(
                "pf-grow pf-flex pf-items-center pf-justify-center pf-gap-4 pf-text-center pf-font-bold pf-text-black pf-cursor-pointer  pf-transition  pf-p-[20px] pf-text-[16px] pf-leading-[24px] lg:pf-text-[20px] lg:pf-leading-[28px]",
                !selectable ? "pf-bg-disable" : "pf-bg-white hover:pf-bg-uneeda-primary"
            )
        );

    return (
        <>
            <ProgressHeader>
                <div className="pf-flex pf-items-center pf-justify-center pf-gap-[10px] pf-flex-col">
                    {pickedData?.center_hole && <button onClick={() => pickStep('centerhole')} className="text-black text-[12px] leading-[18px] font-normal font-[Din_Pro]">
                        {pickedData.center_hole}
                    </button>}
                    <div className="pf-flex pf-items-center pf-justify-center pf-gap-[10px]">
                        <h2 className="pf-section-main-heading">Vented holes</h2>
                        <InfoCircle text="Choose the hole pattern that will fit your sander's backup pad." />
                    </div>
                </div>
            </ProgressHeader>
            <div className="pf-option-section">
                {/* Hole options grid */}
                <div className={twMerge(clsx(
                    "pf-grid pf-grid-cols-2 lg:pf-grid-cols-3 pf-w-full pf-gap-[2px] lg:pf-gap-[10px]"
                ))}>
                    {holes.map((hole) => {
                        const normalizedHoleValue = hole === "No holes" ? "" : hole;
                        const selectable = availableVentedHoles.some(
                            (val) => String(val) === String(normalizedHoleValue)
                        );
                        const IconComponent = HOLE_ICONS[hole];
                        return (
                            <div
                                key={hole}
                                onClick={() => {
                                    if (selectable) {
                                        pickVentedHole(hole);
                                    } else {
                                        setShowNotAvailable(getNotAvailableLabel(hole));
                                    }
                                }}
                                className={sizeBoxClassName(selectable)}
                            >
                                {/* Icon */}
                                {showIcons && IconComponent && <IconComponent />}

                                {/* Label */}
                                <span>{getHoleLabel(hole)}</span>
                            </div>
                        );
                    })}
                </div>
            </div>

            {showNotAvailable ? (
                <NotAvailable
                    option={showNotAvailable}
                    onDismiss={() => setShowNotAvailable("")}
                />
            ) : null}
        </>
    )
}

export default VentedHolePicker