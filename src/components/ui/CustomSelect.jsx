import React, { useState, useRef, useEffect } from "react";

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
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        fill="none"
                        className={`pf-transition-transform ${open ? "pf-rotate-180" : ""}`}
                    >
                        <path
                            d="M20 17.5L15 12.5L10 17.5"
                            stroke="black"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                ) : (
                    <svg className={`pf-transition-transform ${open ? "pf-rotate-180" : ""}`} width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.75 1.5L3.75 4.5L0.75 1.5" stroke="var(--color-body)" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
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