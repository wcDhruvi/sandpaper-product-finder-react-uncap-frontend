import React from 'react'

const Switch = ({
    checked = false,
    onChange,
    label = "In stock",
}) => {
    return (
        <label className="pf-flex pf-items-center pf-gap-[11.22px] pf-cursor-pointer">          {/* Switch */}
            <div className="pf-relative pf-inline-flex pf-items-center">
                <input
                    type="checkbox"
                    checked={checked}
                    onChange={onChange}
                    className="pf-sr-only pf-peer"
                />

                {/* Track */}
                <div className="pf-w-[48px] pf-h-[24px] pf-rounded-[12px] pf-border-0  pf-bg-[#D8D8D8]  pf-transition-colors peer-checked:pf-bg-[#004890]" />

                {/* Thumb */}
                <div className="pf-absolute pf-left-[4px] pf-top-[4px] pf-w-[16px] pf-h-[16px] pf-bg-white pf-rounded-full pf-shadow-[0_2px_10px_0_rgba(0,0,0,0.15)] pf-transition-transform peer-checked:pf-translate-x-[24px]" />
            </div>
            {/* Label */}
            <span className=" pf-text-black pf-text-[14px] pf-leading-[20px] pf-font-normal ">
                {label}
            </span>
        </label>
    )
}

export default Switch