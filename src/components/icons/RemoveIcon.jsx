import React from "react";

const RemoveIcon = ({ className = "", ...props }) => {
    return (
        <svg
            width="8"
            height="8"
            viewBox="0 0 8 8"
            fill="none"
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M7 1L1 7M7 7L1 1"
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default RemoveIcon;
