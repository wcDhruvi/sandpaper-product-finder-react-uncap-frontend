import React from "react";

function ProgressCircle({ current, total }) {
    if (!total) return null;

    const radius        = 28;
    const circumference = 2 * Math.PI * radius;  // full circle length

    // ── How much arc to fill ──
    const percentage      = current / total;
    const strokeDasharray = percentage * circumference;       // filled arc length
    const strokeDashgap   = circumference - strokeDasharray;  // remaining gap

    // ── Start arc from 12 o'clock (top) ──
    // SVG default starts at 3 o'clock, so offset by -25% of circumference
    const strokeOffset = circumference * 0.25;

    return (
        <>
            <div className="pf-relative pf-w-[60px] pf-h-[60px] pf-flex pf-items-center pf-justify-center pf-text-[14px] pf-font-medium">

                <div className="pf-absolute pf-top-0 pf-left-0 pf-w-full pf-h-full pf-flex pf-items-center pf-justify-center pf-pointer-events-none pf-text-[#004890]">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="60"
                        height="60"
                        viewBox="0 0 60 60"
                        fill="none"
                    >
                        {/* ── Background track (unchanged) ── */}
                        <path
                            d="M60 30C60 46.5685 46.5685 60 30 60C13.4315 60 0 46.5685 0 30C0 13.4315 13.4315 0 30 0C46.5685 0 60 13.4315 60 30ZM4.5 30C4.5 44.0833 15.9167 55.5 30 55.5C44.0833 55.5 55.5 44.0833 55.5 30C55.5 15.9167 44.0833 4.5 30 4.5C15.9167 4.5 4.5 15.9167 4.5 30Z"
                            fill="#D9D9D9"
                        />

                        {/* ── Progress arc ── */}
                        <circle
                            className="pf-transition-[stroke-dasharray] pf-duration-500 pf-ease-in-out"
                            stroke="currentColor"
                            strokeWidth="4"
                            strokeLinecap="round"
                            strokeDasharray={`${strokeDasharray} ${strokeDashgap}`}
                            strokeDashoffset={strokeOffset}
                            cx="30"
                            cy="30"
                            r={radius}
                            fill="transparent"
                        />
                    </svg>
                </div>

                <div className="pf-text-center">
                    <span className="pf-text-[#36454F] pf-text-[12px] pf-font-bold pf-leading-[18px]">
                        {current} of {total}
                    </span>
                </div>
            </div>
        </>
    );
}

export default ProgressCircle;