import React, { useState } from 'react'
import { useAppContext } from '../../hooks/useAppContext';
import NotAvailable from '../NotAvailable';
import ProgressHeader from '../ProgressHeader';
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

const ThicknessPicker = () => {

    const { getThicknesses, availableFilters, pickThickness, filtersLoading } = useAppContext();

    const thicknesses = getThicknesses();
    const [showNotAvailable, setShowNotAvailable] = useState('');

    const sizeBoxClassName = (selectable) =>
        twMerge(
            clsx(
                "pf-grow pf-text-center pf-flex pf-items-center pf-justify-center pf-font-bold pf-text-black pf-cursor-pointer pf-p-[20px] pf-text-[16px] pf-leading-[24px] lg:pf-text-[20px] lg:pf-leading-[28px]",
                !selectable ? "pf-bg-disable" : "pf-bg-white hover:pf-bg-uneeda-primary"
            )
        );

    return (
        <>
            <ProgressHeader>
                <h2 className="pf-section-main-heading">
                    Thickness
                </h2>
            </ProgressHeader>
            <div className="pf-option-section">
                <div className={`pf-grid pf-grid-cols-2 lg:pf-grid-cols-4 pf-w-full pf-justify-stretch pf-flex-wrap pf-gap-[2px] lg:pf-gap-[10px]`}>
                    {thicknesses.map((thick) => {
                        const isSelectable = availableFilters.Thickness.includes(thick);

                        return (
                            <button
                                key={thick}
                                onClick={() => {
                                    if (isSelectable) {
                                        pickThickness(thick);
                                    } else {
                                        setShowNotAvailable(thick);
                                    }
                                }}
                                className={sizeBoxClassName(isSelectable)}
                            >
                                {thick}
                            </button>
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

export default ThicknessPicker