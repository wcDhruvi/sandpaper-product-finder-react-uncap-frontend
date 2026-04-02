import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import ArrowDown from "../icons/ArrowDown";

const SpecPopup = ({ children, className = "" }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [rect, setRect] = useState(null);
    const anchorRef = useRef(null);
    const popupRef = useRef(null);

    useEffect(() => {
        const parent = anchorRef.current?.parentElement;
        if (!parent) return;

        const handleMouseEnter = () => {
            console.log("handleMouseEnter", parent.getBoundingClientRect());
            setRect(parent.getBoundingClientRect());
            setIsHovered(true);
        };

        const handleMouseLeave = (e) => {
            // Check if moving to the popup itself
            if (e.relatedTarget instanceof Node && popupRef.current?.contains(e.relatedTarget)) {
                return;
            }
            setIsHovered(false);
        };

        parent.addEventListener("mouseenter", handleMouseEnter);
        parent.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            parent.removeEventListener("mouseenter", handleMouseEnter);
            parent.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, []);

    // Listen for scroll/resize to keep the popup aligned
    useEffect(() => {
        if (!isHovered) return;

        const updateRect = () => {
            const parent = anchorRef.current?.parentElement;
            if (parent) {
                setRect(parent.getBoundingClientRect());
            }
        };

        window.addEventListener("scroll", updateRect, true);
        window.addEventListener("resize", updateRect);

        return () => {
            window.removeEventListener("scroll", updateRect, true);
            window.removeEventListener("resize", updateRect);
        };
    }, [isHovered]);

    return (
        <>
            <span ref={anchorRef} className="pf-hidden" aria-hidden="true" />
            {createPortal(
                <div className="product-finder-section">
                    <div
                        className="pf-fixed pf-inset-0 pf-pointer-events-none pf-z-[9999]"
                        style={{ position: 'fixed', inset: 0 }}
                    >
                        {rect && (
                            <div
                                className="pf-absolute"
                                style={{
                                    top: rect.top,
                                    left: rect.left,
                                    width: rect.width,
                                    height: rect.height,
                                    position: 'absolute'
                                }}
                            >
                                <span
                                    ref={popupRef}
                                    onMouseLeave={(e) => {
                                        const parent = anchorRef.current?.parentElement;
                                        if (e.relatedTarget instanceof Node && parent?.contains(e.relatedTarget)) {
                                            return;
                                        }
                                        setIsHovered(false);
                                    }}
                                    className={`pf-absolute pf-left-[80%] -pf-translate-x-[85%] sm:pf-left-1/2 pf-bottom-[calc(100%+16px)] sm:pf--translate-x-1/2
                  pf-rounded-[3px]
                  pf-bg-[#004890] pf-text-white pf-font-[700] pf-text-[12px]
                  pf-leading-[18px]
                  pf-w-screen pf-max-w-[200px] sm:pf-max-w-[344px]
                  pf-transition-all pf-duration-200 pf-ease-out
                  pf-z-50
                  ${isHovered ? "pf-opacity-100 pf-translate-y-0 pf-pointer-events-auto" : "pf-opacity-0 pf-translate-y-2 pf-pointer-events-none"}
                  ${className}`}
                                >
                                    <div className="pf-p-2 pf-overflow-y-scroll sm:pf-overflow-visible pf-max-h-[300px] sm:pf-max-h-none">
                                        {children}
                                    </div>
                                    <ArrowDown className="pf-absolute pf--bottom-2 pf-left-[83%] -pf-translate-x-[80%] sm:pf-left-1/2 sm:pf--translate-x-1/2" />
                                </span>
                            </div>
                        )}
                    </div>
                </div>,
                document.body
            )}
        </>
    );
};

export default SpecPopup;