import React from "react";
import FinderProgress from "../FinderProgress";
import { useAppContext } from "../../hooks/useAppContext";
import FlippingNumber from "../ui/FlippingNumber";
import IconRefresh from "../icons/IconRefresh";
import { baseUrl, resultPageUrl } from "../../utils/Constants";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

/**
 * ProductFinderProgress Component
 * 
 * This component displays the progress of the product finder, including a progress bar,
 * a results counter, and a navigation link to show the filtered results.
 * It adapts its layout based on the current material selected (e.g., "Belts") 
 * and handles responsiveness for Desktop and Mobile.
 */
function ProductFinderProgress() {

    const {
        material,
        resetData,
        getStringifiedQuery,
        resultsCount
    } = useAppContext();

    const { pathname } = useLocation();

    // Determine if the user is already on the results page
    const isResults = pathname.startsWith(resultPageUrl);

    return (
        <>
            {/* Main Progress Bar Container (Desktop) */}
            <div className="pf-items-center pf-flex pf-justify-center pf-border-t pf-border-b pf-border-[#D8D8D8] pf-bg-white pf-shadow-[0_4px_6px_rgba(0,0,0,0.08)] pf-border-solid pf-border-x-0">

                <div className={`pf-flex pf-items-center pf-gap-[20px] pf-w-full container lg:max-xl:pf-pr-0  ${isResults ? "md:pf-min-h-[102px]" : "lg:pf-min-h-[102px]"}`}>

                    {/* Reset/Refresh button to clear and restart the finder */}
                    <button
                        className={`pf-flex pf-w-[40px] pf-h-[40px] pf-min-w-[40px]
                                    pf-items-center pf-justify-center
                                    pf-bg-[#F6F6F6]
                                    pf-border-none
                                    pf-group
                                    pf-shrink-0
                                   ${isResults ? "max-md:pf-hidden" : "max-lg:pf-hidden"}`}
                        onClick={() => resetData()}
                    >
                        <span className="pf-transition-transform pf-duration-300 group-hover:pf-rotate-180">
                            <IconRefresh />
                        </span>
                    </button>

                    {/* The visual progress tracker */}
                    <FinderProgress isResultPage={isResults} />

                    {/* Results Count & Link (Desktop) - Only show if not on results page */}
                    {!isResults ? (material === "Belts" ? (

                        <div className="pf-bg-[#f9fafb] pf-shrink-0 max-lg:pf-hidden lg:pf-w-[160px]">

                            <div className="pf-flex pf-items-center pf-justify-center pf-py-[8px] lg:pf-w-[160px] lg:pf-h-[120px] lg:pf-p-[12px]">

                                <Link
                                    to={`${resultPageUrl}?${getStringifiedQuery()}`}
                                    className="pf-text-[#004890] pf-font-bold pf-underline"
                                >
                                    Show Results
                                </Link>

                            </div>
                        </div>

                    ) : (

                        <div className="pf-flex pf-px-[12px] pf-py-[10px] pf-gap-[5px] pf-bg-uneeda-primary pf-shrink-0 max-lg:pf-hidden">

                            <div className="pf-flex pf-flex-col pf-gap-[5px]">

                                <p className="pf-m-0 pf-text-[#272727] pf-text-[12px] pf-leading-[18px]">
                                    Product found:
                                </p>

                                <FlippingNumber num={resultsCount} />

                                <Link className="pf-text-[#004890] pf-text-[12px] pf-leading-[18px] pf-font-bold pf-underline" to={`${resultPageUrl}?${getStringifiedQuery()}`}>
                                    Show Results
                                </Link>

                            </div>

                        </div>

                    )) : null}
                </div>
            </div>

            {/* Mobile Footer Sticky View for Results Count & Link */}
            {!isResults ? (material === "Belts" ? (
                <div className="pf-w-full pf-bg-[#f9fafb] lg:pf-hidden ">
                    <div className="pf-w-full pf-mx-auto pf-flex pf-items-center pf-justify-center pf-py-[8px] lg:pf-w-[160px] lg:pf-h-[120px] lg:pf-p-[12px] container">
                        <Link
                            to={`${resultPageUrl}?${getStringifiedQuery()}`}
                            className="pf-text-[#004890] pf-text-[12px] pf-font-bold pf-leading-[18px] pf-underline"
                        >
                            Show results
                        </Link>
                    </div>
                </div>
            ) : (
                <div className="pf-w-full pf-bg-[#FFE411] pf-flex pf-items-center lg:pf-hidden ">
                    <div className="pf-w-full pf-mx-auto container">
                        <div className="pf-flex pf-items-center pf-gap-[5px] pf-py-[10px] pf-px-[12px]">

                            <p className="pf-text-[#272727] pf-text-[12px] pf-leading-[16px] pf-m-0 pf-whitespace-nowrap">
                                Product found:
                            </p>

                            <FlippingNumber num={resultsCount} />

                            <Link 
                                to={`${resultPageUrl}?${getStringifiedQuery()}`}
                                className="pf-text-[#004890] pf-text-[12px] pf-font-bold pf-leading-[16px] pf-underline"
                            >
                                Show Results
                            </Link>

                        </div>
                    </div>
                </div>
            )) : null}
        </>
    );
}

export default ProductFinderProgress;