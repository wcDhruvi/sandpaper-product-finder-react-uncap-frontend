import React, { useState, useRef, useEffect } from "react";

const AccordionItem = ({ title, children, isOpen, onClick , className = ""}) => {
    const contentRef = useRef(null);
    const [maxHeight, setMaxHeight] = useState("0px");

    useEffect(() => {
        if (contentRef.current) {
            if (isOpen) {
                setMaxHeight(`${contentRef.current.scrollHeight}px`);
            } else {
                setMaxHeight("0px");
            }
        }
    }, [isOpen, children]);

    return (
        <>
            {/* Header */}
            <button
                onClick={onClick}
                className={`pf-flex pf-py-[15px] pf-justify-between pf-items-center pf-w-full ${className}`}
            >
                <span className="pf-text-black pf-font-bold pf-text-[14px] pf-leading-[20px]">
                    {title}
                </span>

                {/* Arrow */}
                <span
                    className={`pf-flex pf-w-[30px] pf-h-[30px] pf-items-center pf-justify-center pf-transition-transform pf-duration-300 ${
                        isOpen ? "pf-rotate-180" : ""
                    }`}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        fill="none"
                    >
                        <path
                            d="M20 17.5L15 12.5L10 17.5"
                            stroke="black"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </span>
            </button>

            {/* Content Wrapper */}
            <div
                style={{ maxHeight }}
                className={`pf-overflow-hidden pf-transition-all pf-duration-300 pf-ease-in-out ${
                    isOpen ? "pf-opacity-100 pf-pb-[22px]" : "pf-opacity-0 pf-pb-0"
                }`}
            >
                <div ref={contentRef}>
                    {children}
                </div>
            </div>
        </>
    );
};

export default AccordionItem;