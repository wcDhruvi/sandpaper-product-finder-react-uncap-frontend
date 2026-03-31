import React from "react";

const ChevronUp = ({ className = "", ...props }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            className={className}
            {...props}
        >
            <path
                d="M20 17.5L15 12.5L10 17.5"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default ChevronUp;
