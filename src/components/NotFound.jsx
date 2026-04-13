import React from "react";
import NotFoundIcon from "./icons/NotFound";
import { useAppContext } from "../hooks/useAppContext";
import { inquireUrl } from "../utils/Constants";

function NotFound() {

    const { getStringifiedQuery, step, resetData } = useAppContext();
    const q = getStringifiedQuery();

    return (
        <div className="pf-w-full pf-flex container pf-justify-center">
            <div className=" pf-flex pf-flex-col">

                {/* Main content */}
                <div className="pf-relative pf-z-10 pf-w-full pf-grow pf-flex pf-flex-col pf-justify-between xl:pf-justify-start pf-gap-6 xl:pf-gap-8 pf-items-center md:pf-mt-4 lg:pf-mt-10">

                    {/* Card */}
                    <div className="pf-flex pf-flex-col pf-items-center md:pf-max-w-[678px] lg:pf-max-w-[716px]">

                        <NotFoundIcon />

                        {/* Heading */}
                        <div className="pf-p-2 pf-flex pf-flex-col pf-gap-4 pf-text-center">
                            <h2 className="pf-text-4xl md:pf-text-5xl pf-font-bold pf-text-zinc-900 pf-mb-0">
                                Sorry,
                            </h2>
                            <p className="pf-text-3xl md:pf-text-4xl md:pf-font-medium pf-text-zinc-900 pf-mb-0">
                                We couldn't find any results for your search
                            </p>
                        </div>

                        {/* Body */}
                        <div className="pf-max-w-[606px] pf-mx-auto">
                            <div>
                                <p className="pf-mt-8 pf-text-base pf-text-zinc-600 pf-text-center pf-mb-0">
                                    But don't worry, we're here to help! It looks like we don't
                                    have the exact item you're looking for in our catalog.
                                </p>
                            </div>

                            {/* CTA card */}
                            <div className="pf-w-full pf-mt-8 pf-bg-white pf-px-6 pf-py-4 pf-border pf-border-zinc-200 pf-flex pf-flex-col pf-gap-4 pf-rounded-lg">
                                <p className="pf-text-center pf-text-base pf-text-black pf-font-bold pf-mb-0">
                                    However, we can create a custom order just for you.
                                </p>
                                <a
                                    href={`${inquireUrl}?${q}&step=${step}`}
                                    className="pf-bg-uneeda-primary pf-text-center pf-px-4 pf-py-3.5 pf-w-full pf-text-lg pf-text-zinc-900 pf-rounded pf-cursor-pointer"
                                >
                                    Create Custom Order
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NotFound;