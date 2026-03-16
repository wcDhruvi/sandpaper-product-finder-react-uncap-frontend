import React from "react";
import FinderProgress from "../../components/FinderProgress";
import { useAppContext } from "../../hooks/useAppContext";
import FlippingNumber from "../../components/FlippingNumber";
import IconRefresh from "../../utils/icons/IconRefresh";

function ProductFinderProgress() {

    const {
        material,
        resetData,
        getStringifiedQuery,
        resultsCount
    } = useAppContext();

    return (
        <>

            <div className="pf-items-center pf-flex pf-justify-center pf-border-t pf-border-b pf-border-[#D8D8D8] pf-bg-white pf-shadow-[0_4px_6px_rgba(0,0,0,0.08)] pf-border-solid pf-border-x-0">

                <div className="pf-flex pf-items-center pf-gap-[20px] pf-w-full container lg:max-xl:pf-pr-0">

                    {/* Refresh button */}
                    <button
                        className="pf-flex pf-w-[40px] pf-h-[40px] pf-min-w-[40px]
                                    pf-items-center pf-justify-center
                                    pf-bg-[#F6F6F6]
                                    pf-border-none
                                    pf-group
                                    pf-shrink-0
                                    max-lg:pf-hidden"
                        onClick={() => resetData()}
                    >
                        <span className="pf-transition-transform pf-duration-300 group-hover:pf-rotate-180">
                            <IconRefresh />
                        </span>
                    </button>

                    <FinderProgress />

                    {material === "Belts" ? (

                        <div className="pf-bg-[#f9fafb] pf-shrink-0 max-lg:pf-hidden lg:pf-w-[160px]">

                            <div className="pf-flex pf-items-center pf-justify-center pf-py-[8px] lg:pf-w-[160px] lg:pf-h-[120px] lg:pf-p-[12px]">

                                <a
                                    href={`/product-finder/results?${getStringifiedQuery()}`}
                                    className="pf-text-[#004890] pf-font-bold pf-underline"
                                >
                                    Show results
                                </a>

                            </div>
                        </div>

                    ) : (

                        <div className="pf-flex pf-px-[12px] pf-py-[10px] pf-gap-[5px] pf-bg-[#FFE411] pf-shrink-0 max-lg:pf-hidden">

                            <div className="pf-flex pf-flex-col pf-gap-[5px]">

                                <p className="pf-m-0 pf-text-[#272727] pf-text-[12px] pf-leading-[18px]">
                                    Product found:
                                </p>

                                <FlippingNumber num={resultsCount} />

                                <a className="pf-text-[#004890] pf-text-[12px] pf-leading-[18px] pf-font-bold pf-underline">
                                    Show Results
                                </a>

                            </div>

                        </div>

                    )}
                </div>
            </div>
        </>
    );
}

export default ProductFinderProgress;