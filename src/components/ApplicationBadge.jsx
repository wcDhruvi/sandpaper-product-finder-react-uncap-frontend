import React from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

import Wood from "./icons/Wood";
import Metal from "./icons/Metal";
import Composites from "./icons/Composites";
import SolidSurfaces from "./icons/SolidSurfaces";
import Check from "./icons/Check";

const APPLICATION_GROUP_ICONS = {
    "Wood": Wood,
    "Metal": Metal,
    "Composites": Composites,
    "Solid Surfaces": SolidSurfaces,
};

const ApplicationBadge = ({
    material,
    activeGroup,
    onPickGroup,
    applications,
    title,
    onDisabledGroup,
    onSelect,
    onDeselect,
    selectedSurfaces,
    availableSurfaces,
}) => {
    let canSelect = applications.some((app) =>
        availableSurfaces.includes(app)
    );

    if (material === "Belts") {
        canSelect = true;
    }

    if (title === "Metal") {
        applications = [...applications].sort();
    }


    const Icon = APPLICATION_GROUP_ICONS[title];

    const groupBoxClassName = (selectable, enabled) =>
        twMerge(
            clsx(
                "pf-group pf-grow pf-flex  pf-flex-col-reverse sm:pf-flex-row pf-items-center pf-justify-center pf-gap-2 sm:pf-gap-4 pf-text-center pf-font-bold pf-text-black pf-cursor-pointer  pf-transition  pf-p-[20px] pf-text-[16px] pf-leading-[24px] lg:pf-text-[20px] lg:pf-leading-[28px]",
                !selectable ? "pf-bg-disable" : enabled ? "pf-bg-uneeda-primary" : "pf-bg-white hover:pf-bg-uneeda-primary"
            )
        );

    return (
        <div
            className={twMerge(
                clsx(
                    " pf-flex pf-flex-col pf-items-center pf-text-center pf-font-bold pf-text-gray-900",
                    activeGroup === title && "pf-col-span-4"
                )
            )}
        >
            {/* GROUP CARD */}
            {activeGroup !== title && (
                <div
                    className={twMerge(
                        clsx(
                            "pf-w-full pf-h-full pf-px-5 pf-py-5 pf-cursor-pointer pf-transition   lg:pf-min-w-[164px]",
                            !canSelect ? "pf-bg-disable " : "pf-bg-white hover:pf-bg-uneeda-primary"
                        )
                    )}
                    onClick={() =>
                        canSelect ? onPickGroup(title) : onDisabledGroup(title)
                    }
                >
                    {/* ICON */}

                    {Icon && <Icon />}


                    {/* TITLE */}
                    <div className="pf-text-lg md:text-base  pf-font-bold">
                        {title}
                    </div>
                </div>
            )}

            {/* APPLICATION LIST */}
            {activeGroup === title && (
                <>

                    <div className="pf-option-section">
                        {/* Hole options grid */}
                        <div className={twMerge(clsx(
                            "pf-grid pf-grid-cols-2 lg:pf-grid-cols-3 pf-w-full pf-gap-[2px] lg:pf-gap-[10px]"
                        ))}>
                            {applications.map((app) => {
                                const enabled = selectedSurfaces.includes(app);
                                const selectable =
                                    material === "Belts" ||
                                    availableSurfaces.includes(app);
                                return (
                                    <div
                                        key={app}
                                        onClick={() => {
                                            if (!selectable) return;
                                            enabled ? onDeselect(app) : onSelect(app);
                                        }}
                                        className={groupBoxClassName(selectable, enabled)}
                                    >
                                        {/* Label */}
                                        {app === "Metal" ? "Other Metals" : app}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default ApplicationBadge;