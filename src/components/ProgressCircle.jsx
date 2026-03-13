import React from "react";

function ProgressCircle({ current, total }) {
  if (!total) return null;

  const percentage = current / total;
  const circle = 360;
  const angle = percentage * circle;

  const radius = 30;
  const circumference = 2 * Math.PI * radius;

  const strokeOffset = (1 / 4) * circumference;
  const strokeDasharray = (angle / 360) * circumference;

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
            <path
              d="M60 30C60 46.5685 46.5685 60 30 60C13.4315 60 0 46.5685 0 30C0 13.4315 13.4315 0 30 0C46.5685 0 60 13.4315 60 30ZM4.5 30C4.5 44.0833 15.9167 55.5 30 55.5C44.0833 55.5 55.5 44.0833 55.5 30C55.5 15.9167 44.0833 4.5 30 4.5C15.9167 4.5 4.5 15.9167 4.5 30Z"
              fill="#D9D9D9"
            />

            {/* Progress Circle */}
            <circle
              className="pf-transition-[stroke-dashoffset] pf-duration-500 pf-ease-in-out"
              stroke="currentColor"
              strokeWidth="4"
              strokeDashoffset={strokeOffset}
              strokeDasharray={`${strokeDasharray} ${circumference - strokeDasharray}`}
              cx="30"
              cy="30"
              r="28"
              fill="transparent"
              transform="rotate(-20 30 30)"
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