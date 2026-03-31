import React, { useState, useEffect } from 'react'
import { useAppContext } from '../../hooks/useAppContext';
import { twMerge } from "tailwind-merge";
import clsx from "clsx";
import ProgressHeader from '../ui/ProgressHeader';
import InfoCircle from '../ui/InfoCircle';
import CenterHole from '../icons/CenterHole';

const CenterHolePicker = () => {

    const {
        pickCenterHoleSize,
        getCenterHoleSizes,
        getOtherCenterHoleSizes,
        availableFilters,
    } = useAppContext();

    const centerholes = getCenterHoleSizes();
    const otherCenterholes = getOtherCenterHoleSizes();

    const dim2 = availableFilters["Dim 2 Description Fraction"];

    const isSelectable = (centerhole) => Array.isArray(dim2) && dim2.indexOf(centerhole) !== -1;

    const sizeBoxClassName = (selectable) =>
        twMerge(
            clsx(
                "pf-grow pf-flex pf-items-center pf-justify-center pf-gap-4 pf-text-center pf-font-bold pf-text-black  pf-transition  pf-p-[20px] pf-text-[16px] pf-leading-[24px] lg:pf-text-[20px] lg:pf-leading-[28px]",
                !selectable ? "pf-bg-disable" : "pf-bg-white hover:pf-bg-uneeda-primary pf-cursor-pointer "
            )
        );

    function inchSorter(a, b) {
        let valueA = parseFloat(a);
        let valueB = parseFloat(b);
        if (a.match(/^[0-9]+\/[0-9]+$/)) {
            let spl = a.split('/');
            valueA = parseFloat(spl[0]) / parseFloat(spl[1]);
        }
        if (b.match(/^[0-9]+\/[0-9]+$/)) {
            let spl = b.split('/');
            valueB = parseFloat(spl[0]) / parseFloat(spl[1]);
        }
        return valueA < valueB ? -1 : 1;
    }

    return (
        <>
            <ProgressHeader>
                <div className="pf-flex pf-items-center pf-justify-center pf-gap-[10px]">
                    <h2 className="pf-section-main-heading">Center hole size</h2>
                    <InfoCircle text="Choose the hole pattern that will fit your sander's backup pad." />
                </div>
            </ProgressHeader>
            <div className="pf-option-section">
                <div className="pf-grid pf-grid-cols-2 lg:pf-flex pf-w-full pf-gap-[2px] lg:pf-gap-[10px]">
                    {Object.keys(centerholes).map((centerhole) => {
                        const selectable = isSelectable(centerhole);
                        return (
                            <div
                                key={centerhole}
                                onClick={() => selectable && pickCenterHoleSize(centerhole)}
                                className={sizeBoxClassName(selectable)}
                            >
                                {centerhole === "1/4" && (
                                    <CenterHole />
                                )}
                                {centerhole === "1/2" && (
                                    <CenterHole />
                                )}
                                <span>{centerhole}"</span>
                            </div>
                        );
                    })}
                </div>
                {/* ── Other options ── */}
                <div className="pf-flex pf-flex-col pf-items-start pf-gap-5 pf-self-stretch">
                    <h3 className="pf-sub-section-heading">Other options</h3>

                    <div className="pf-grid pf-grid-cols-2 lg:pf-grid-cols-3 pf-w-full pf-gap-[2px] lg:pf-gap-[10px]">
                        {Object.keys(otherCenterholes)
                            .sort(inchSorter)
                            .map((centerhole) => {
                                const selectable = isSelectable(centerhole);

                                return (
                                    <div
                                        key={centerhole}
                                        onClick={() => selectable && pickCenterHoleSize(centerhole)}
                                        className={sizeBoxClassName(selectable)}
                                    >
                                        <CenterHole />
                                        <span>{centerhole}"</span>
                                    </div>
                                );
                            })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default CenterHolePicker