import React from "react";

function FlippingNumber({ num }) {

    if (num > 9999) {
        num = 9999;
    }
    let s = num.toString();
    if (s.length < 4) {
        s = s.padStart(4, " ");
    }

    return (
        <>
            <div className="pf-flex pf-items-center pf-gap-[5px] pf-flex-[1_0_0]">
                {s.split("").map((elem, index) => (
                    <div
                        key={index}
                        className="pf-flex pf-w-[36px] pf-h-[36px] pf-py-[5px] pf-px-[10px]
                     pf-justify-center pf-items-center
                     pf-rounded-[6px]
                     pf-bg-[rgba(255,255,255,0.40)]"
                    >
                        <span
                            className="pf-text-black
                       pf-text-center
                       pf-text-[18px]
                       pf-font-bold
                       pf-leading-[26px]"
                        >
                            {elem}
                        </span>
                    </div>
                ))}
            </div>
        </>
    );
}

export default FlippingNumber;