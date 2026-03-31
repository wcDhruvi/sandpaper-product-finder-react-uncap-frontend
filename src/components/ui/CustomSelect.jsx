import React, { useState, useRef, useEffect } from "react";
import ChevronUp from "../../utils/icons/ChevronUp";
import ChevronDown from "../../utils/icons/ChevronDown";

const CustomSelect = ({ options = [], value, onChange, isFilterDrawer = false }) => {
    const [open, setOpen] = useState(false);
    const ref = useRef();

    const selected = options.find((o) => o.value === value);

    // Close on outside click
    useEffect(() => {
        const handleClick = (e) => {
            if (!ref.current?.contains(e.target)) {
                setOpen(false);
            }
        };
        document.addEventListener("click", handleClick);
        return () => document.removeEventListener("click", handleClick);
    }, []);

    return (
        <div ref={ref} className="pf-relative pf-inline-block">

            {/* Button */}
            <button
                onClick={() => setOpen(!open)}
                className="pf-flex pf-items-center pf-gap-[6px] pf-text-[12px] pf-font-semibold"
            >
                <span>{selected?.label || "Select"}</span>

                {isFilterDrawer ? (
                    <ChevronUp className={`pf-transition-transform ${open ? "pf-rotate-180" : ""}`} />
                ) : (
                    <ChevronDown className={`pf-transition-transform ${open ? "pf-rotate-180" : ""}`} />
                )}
            </button>

            {/* Dropdown */}
            {open && (
                <div className="pf-absolute pf-right-0 pf-mt-[6px] pf-min-w-max pf-bg-white pf-border pf-border-gray-200 pf-rounded-md pf-shadow-md pf-z-50">

                    <ul className="pf-p-[6px] pf-list-none pf-m-0">

                        {options.map((opt) => (
                            <li key={opt.value}>
                                <button
                                    onClick={() => {
                                        onChange(opt.value);
                                        setOpen(false);
                                    }}
                                    className={`
                    pf-w-full 
                    pf-text-left 
                    pf-p-[8px] 
                    pf-text-[12px] 
                    hover:pf-bg-gray-100
                    
                    ${value === opt.value ? "pf-underline" : ""}
                  `}
                                >
                                    {opt.label}
                                </button>
                            </li>
                        ))}

                    </ul>
                </div>
            )}
        </div>
    );
};

export default CustomSelect;