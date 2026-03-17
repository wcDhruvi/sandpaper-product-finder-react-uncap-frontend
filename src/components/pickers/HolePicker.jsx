import React, { useState, useEffect } from 'react'
import { useAppContext } from '../../hooks/useAppContext';
import NotFound from '../NotFound';
import NotAvailable from '../NotAvailable';
import ProgressHeader from '../ProgressHeader';
import InfoCircle from '../InfoCircle';
import NoCenterHole from '../../utils/icons/NoCenterHole';
import CenterHole from '../../utils/icons/CenterHole';
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

const HolePicker = () => {

    const { filtersLoading, resultsCount, pickCenterHole, getCenterHoles, availableFilters } = useAppContext();

    const centerholes = getCenterHoles();

    const liveCenterHoleSizes = Array.isArray(
        availableFilters["Dim 2 Description Fraction"]
    )
        ? availableFilters["Dim 2 Description Fraction"]
        : [];

    const [isLoaded, setIsLoaded] = useState(false);
    const [showNotAvailable, setShowNotAvailable] = useState("");

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    if (isLoaded && !filtersLoading && !resultsCount) {
        return <NotFound />;
    }

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
                <div className='pf-flex pf-items-center pf-justify-center pf-gap-[10px]'>
                    <h2 className="pf-section-main-heading">
                        Hole Configuration
                    </h2>
                    <InfoCircle text="Choose the hole pattern that will fit your sander's backup pad." />
                </div>
            </ProgressHeader>
            <div className="pf-option-section">
                <div className="pf-grid pf-grid-cols-2 lg:pf-flex pf-w-full pf-gap-[2px]">
                    {Object.keys(centerholes).map((centerhole) => {
                        const isSelectable =
                            centerhole === "Center hole"
                                ? liveCenterHoleSizes.filter((a) => a).length > 0
                                : centerhole === "No center hole"
                                    ? liveCenterHoleSizes.filter((a) => a === "" || !a).length > 0
                                    : true;

                        return (
                            <div
                                key={centerhole}
                                onClick={() => {
                                    if (isSelectable) {
                                        pickCenterHole(centerhole);
                                    } else {
                                        setShowNotAvailable(centerhole);
                                    }
                                }}
                                className={sizeBoxClassName(isSelectable)}
                            >
                                {centerhole === "Center hole" && (
                                    <CenterHole />
                                )}
                                {centerhole === "No center hole" && (
                                    <NoCenterHole />
                                )}
                                <span>{centerhole}</span>
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

export default HolePicker