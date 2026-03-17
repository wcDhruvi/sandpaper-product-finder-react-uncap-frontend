import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../hooks/useAppContext";
import Close from "../utils/icons/Close";
import { baseUrl } from "../utils/Constent";


export default function NotAvailable({ onDismiss, option }) {
    const { getStringifiedQuery, material, step, device } = useAppContext()

    const [show, setShow] = useState(false);

    const q = getStringifiedQuery();
    const deviceSingular = material ? material.replace(/s$/, "") : "";

    // Fade-in on mount
    useEffect(() => {
        const originalStyle = window.getComputedStyle(document.body).overflowY;

        document.body.style.overflowY = "hidden";
        setShow(true);

        return () => {
            document.body.style.overflowY = originalStyle;
        };
    }, []);
    
    const hide = () => {
        if (show) {
            setTimeout(() => {
                onDismiss?.();
            }, 500);
        }
        setShow(false);
    };

    return (
        <div
            className={[
                "pf-fixed pf-h-dvh pf-w-dvw pf-top-0 pf-left-0 pf-z-20",
                "pf-opacity-0 pf-transition pf-duration-500",
                show ? "pf-opacity-100" : "",
            ]
                .filter(Boolean)
                .join(" ")}
        >
            {/* ── Scrollable content layer ── */}
            <div className="pf-relative pf-w-screen pf-flex pf-flex-col pf-h-full">
                <div className="pf-relative pf-z-10 pf-w-full pf-grow pf-flex pf-flex-col pf-justify-between pf-gap-6 xl:pf-gap-8 pf-px-4 pf-items-center pf-overflow-auto">
                    {/* Spacer */}
                    <div />

                    {/* ── Modal card ── */}
                    <div className="pf-flex pf-flex-col pf-items-center lg:pf-w-[800px] pf-bg-[#FFF] pf-relative pf-shadow-[0_10px_30px_rgba(0,0,0,0.10)] ">

                        <div className="pf-flex pf-px-[25px] lg:pf-px-[50px] pf-items-start pf-self-stretch">
                            <div className="pf-flex pf-py-[20px] pf-pr-0 pf-pl-[14px] pf-justify-end pf-items-center pf-gap-[414.27px] pf-flex-[1_0_0]">
                                <button type="button"
                                    aria-label="Close"
                                    onClick={hide}
                                >
                                    <Close />
                                </button>
                            </div>

                        </div>


                        <div className=" pf-p-[20px] lg:pf-p-[30px] pf-flex pf-justify-center pf-items-center pf-self-stretch pf-border pf-border-solid pf-border-[#D8D8D8] pf-bg-[#FFF]">
                            {/* Heading */}
                            <div className="pf-w-full sm:pf-max-w-[560px] pf-flex pf-flex-col pf-justify-center pf-items-center pf-gap-[20px] pf-self-stretch">
                                <p className="pf-text-center pf-text-[#000] pf-text-[26px] lg:pf-text-[34px] pf-font-normal pf-leading-[30px] lg:pf-leading-[42px] pf-mb-0">
                                    <strong className="pf-text-[#004890] pf-font-bold">{option}</strong>
                                    {" is not available for this configuration."}
                                </p>

                                <div className="pf-flex pf-p-[20px] pf-flex-col pf-justify-center pf-gap-[10px] pf-rounded-[3px] pf-bg-[#F6F6F6] pf-w-full">
                                    <div className="pf-text-center pf-text-[#000] pf-text-base lg:pf-text-xl pf-font-normal ">
                                        Didn't find the product you need?
                                    </div>
                                    <Link to={`${baseUrl}/inquire/?${q}&step=${step}`}
                                        className="pf-flex pf-justify-center pf-items-center pf-gap-[16px] pf-self-stretch pf-rounded-[3px] pf-bg-[#FFE411] pf-py-[12px] pf-px-[24px] pf-text-[#000]  pf-text-sm lg:pf-text-base pf-font-bold">
                                        Inquire Now
                                    </Link>
                                </div>



                                {/* Find another device link */}
                                <Link
                                    to={`${baseUrl}?reset=1&material=${material}&device=${device}&step=size`}
                                    onClick={hide}
                                    className="pf-flex pf-w-full pf-py-[12px] pf-px-[24px] pf-justify-center pf-items-center pf-gap-[16px] pf-rounded-[3px] pf-bg-[#004890] pf-text-center pf-text-white pf-text-sm lg:pf-text-base pf-font-bold"
                                >
                                    Find another {deviceSingular}
                                </Link>

                            </div>
                        </div>
                    </div>

                    {/* Spacer */}
                    <div />
                </div>

                {/* ── Backdrop ── */}
                <div className="pf-absolute pf-top-0 pf-left-0 pf-w-full pf-h-full pf-z-0 pf-opacity-40 pf-bg-[#9FA3A7] pf-blur-[3.5px]" />
            </div>
        </div>
    );
}