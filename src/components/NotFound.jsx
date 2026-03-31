import React from "react";
import { Link } from "react-router-dom";
import NotFoundIcon from "./icons/NotFound";
import { useAppContext } from "../hooks/useAppContext";
import { baseUrl } from "../utils/Constants";

function NotFound() {

    const { getStringifiedQuery, step } = useAppContext();
    const q = getStringifiedQuery();

    return (
        <div className="pf-relative pf-w-full pf-flex">
            <div className="pf-relative pf-w-screen pf-flex pf-flex-col">

                {/* Main content */}
                <div className="pf-relative pf-z-10 pf-w-full pf-grow pf-flex pf-flex-col pf-justify-between xl:pf-justify-start pf-gap-6 xl:pf-gap-8 pf-items-center md:pf-mt-4 lg:pf-mt-10">

                    {/* Card */}
                    <div className="pf-flex pf-flex-col pf-items-center md:pf-max-w-[678px] lg:pf-max-w-[716px]">

                        <NotFoundIcon />

                        {/* Heading */}
                        <div className="pf-p-2 pf-flex pf-flex-col pf-gap-4 pf-text-center">
                            <h2 className="pf-text-4xl md:pf-text-5xl pf-font-bold pf-text-zinc-900">
                                Sorry,
                            </h2>
                            <p className="pf-text-3xl md:pf-text-4xl md:pf-font-medium pf-text-zinc-900">
                                We couldn't find any results for your search
                            </p>
                        </div>

                        {/* Body */}
                        <div className="pf-max-w-[606px] pf-mx-auto">
                            <div>
                                <p className="pf-mt-8 pf-text-base pf-text-zinc-600 pf-text-center">
                                    But don't worry, we're here to help! It looks like we don't
                                    have the exact item you're looking for in our catalog.
                                </p>
                            </div>

                            {/* CTA card */}
                            <div className="pf-w-full pf-mt-8 pf-bg-white pf-px-6 pf-py-4 pf-border pf-border-zinc-200 pf-flex pf-flex-col pf-gap-4 pf-rounded-lg">
                                <p className="pf-text-center pf-text-base pf-text-black pf-font-bold">
                                    However, we can create a custom order just for you.
                                </p>
                                <Link
                                    to={`${baseUrl}/inquire/?${q}&step=${step}`}
                                    className="pf-bg-uneeda-primary pf-text-center pf-px-4 pf-py-3.5 pf-w-full pf-text-lg pf-text-zinc-900 pf-rounded"
                                >
                                    Create Custom Order
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Radial gradient background decoration */}
                {/* <div className="pf-absolute pf-z-0 -pf-bottom-12 lg:-pf-bottom-18 pf-h-[40em] pf-pointer-events-none pf-w-screen pf-left-1/2 -pf-translate-x-1/2 pf-bg-[radial-gradient(ellipse_at_bottom,_#FCE45055_30%,#F6F6F6_60%)] lg:pf-bg-[radial-gradient(ellipse_at_bottom,_#FCE45055_30%,#F6F6F6_70%)]" /> */}
            </div>
        </div>
    );
}

export default NotFound;