import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import AccordionItem from "../../components/ui/AccordionItem";
import FilterList from "../../components/FilterList";
import Switch from "../../components/ui/Switch";
import { useAppContext } from "../../hooks/useAppContext";
import { defaultSelectedFilter } from "../../utils/Common";

export default function FilterDrawer({
    onDismiss,
    selectedFilters,
    setSelectedFilters,

}) {

    const { availableFilters } = useAppContext();
    const [open, setOpen] = useState(false);

    // ✅ TEMP STATE (IMPORTANT)
    const [tempFilters, setTempFilters] = useState(selectedFilters);

    // Accordion state
    const [activeIndex, setActiveIndex] = useState(null);

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        requestAnimationFrame(() => setOpen(true));

        // ✅ sync temp with parent
        setTempFilters(selectedFilters);

        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    const closeDrawer = () => {
        setOpen(false);
        setTimeout(() => {
            onDismiss?.();
        }, 300);
    };

    // ✅ APPLY
    const handleApply = () => {
        setSelectedFilters(tempFilters);
        closeDrawer();
    };

    // ✅ CLEAR
    const handleClear = () => {
        setTempFilters(defaultSelectedFilter);
        setSelectedFilters(defaultSelectedFilter);
        closeDrawer();

    };

    // ✅ Checkbox handler
    const handleCheckboxChange = (type, value) => {
        setTempFilters((prev) => {
            const exists = prev[type].includes(value);

            return {
                ...prev,
                [type]: exists
                    ? prev[type].filter((v) => v !== value)
                    : [...prev[type], value],
            };
        });
    }

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };


    if (!mounted) return null;

    console.log("Selected filter", selectedFilters)
    console.log("temp filter", tempFilters)

    return createPortal(
        <div className="product-finder-section">
            <div className="pf-fixed pf-inset-0 pf-z-[999]">

                {/* Overlay */}
                <div
                    onClick={closeDrawer}
                    className={`
                    pf-absolute pf-inset-0 
                    pf-bg-[rgba(159,163,167,0.4)]
                    pf-backdrop-blur-[7px]
                    pf-transition-all pf-duration-300
                    ${open
                            ? "pf-opacity-100 pf-visible pf-pointer-events-auto"
                            : "pf-opacity-0 pf-invisible pf-pointer-events-none"
                        }
                `}
                />

                {/* Drawer */}
                <div
                    className={`
        pf-fixed pf-top-0 pf-left-0 pf-w-[calc(100vw-15px)] pf-max-w-[540px] pf-bg-[#fff]  pf-z-[90]
                    pf-grid pf-grid-rows-[auto_1fr_auto]
                    pf-h-[100vh] supports-[height:100dvh]:pf-h-[100dvh]

                    pf-transform pf-transition-transform pf-duration-300
                    ${open ? "pf-translate-x-0" : "-pf-translate-x-full"}
                `}
                >

                    {/* Header */}
                    <div className="pf-sticky pf-top-0 pf-z-[35] pf-bg-white pf-px-[30px]">
                        <div className="pf-flex pf-justify-between pf-items-center pf-py-[20px] pf-border-b pf-border-gray-300">

                            <div>
                                <p className="pf-text-[16px] pf-font-semibold">
                                    Filter and sort
                                </p>
                                <span className="pf-text-[12px] pf-mt-[4px] pf-block">
                                    {/* Optional: dynamic count */}
                                </span>
                            </div>

                            <button onClick={closeDrawer} className="pf-text-[18px]">
                                ✕
                            </button>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="pf-overflow-y-auto pf-px-[30px] pf-py-[25px] pf-text-[15px]">

                        {/* Availability */}
                        <AccordionItem
                            title="Availability"
                            isOpen={activeIndex === 0}
                            onClick={() => toggleAccordion(0)}
                        >
                            <Switch
                                checked={tempFilters.inStock || false}
                                onChange={() =>
                                    setTempFilters((prev) => ({
                                        ...prev,
                                        inStock: !prev.inStock,
                                    }))
                                }
                            />
                        </AccordionItem>

                        {/* Grit */}
                        <AccordionItem
                            title="Grit"
                            isOpen={activeIndex === 1}
                            onClick={() => toggleAccordion(1)}
                        >
                            <FilterList
                                data={availableFilters["Grit"]}
                                type="grit"
                                selectedFilters={tempFilters}
                                onChange={handleCheckboxChange}
                            />
                        </AccordionItem>

                        {/* Grain */}
                        <AccordionItem
                            title="Grain"
                            isOpen={activeIndex === 2}
                            onClick={() => toggleAccordion(2)}
                        >
                            <FilterList
                                data={availableFilters["Grain"]}
                                type="grain"
                                selectedFilters={tempFilters}
                                onChange={handleCheckboxChange}
                            />
                        </AccordionItem>

                    </div>

                    {/* Footer */}
                    <div className="pf-border-t pf-border-gray-300 pf-p-[20px] pf-grid pf-gap-[7px] pf-grid-cols-2">

                        <button onClick={handleClear} className="pf-text-[14px] pf-underline pf-text-[#004890] pf-font-bold pf-text-[14px] pf-leading-[20px] pf-text-uppercase">
                            Clear
                        </button>

                        <button
                            onClick={handleApply}
                            className="pf-bg-uneeda-primary pf-font-bold pf-text-[14px] pf-leading-[20px] pf-py-[10px] pf-rounded"
                        >
                            Apply
                        </button>

                    </div>
                </div>
            </div>
        </div>,
        document.body
    );
}