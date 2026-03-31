import React from "react";

const ChevronDown = ({ className = "", ...props }) => {
    return (
        <svg
            className={className}
            width="8"
            height="6"
            viewBox="0 0 8 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M6.75 1.5L3.75 4.5L0.75 1.5"
                stroke="var(--color-body)"
                strokeWidth="1.1"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default ChevronDown;
