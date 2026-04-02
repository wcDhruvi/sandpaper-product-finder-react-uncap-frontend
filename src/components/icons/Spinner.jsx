import React from 'react';

const Spinner = ({ className = "" }) => {
    return (
        <svg
            aria-hidden="true"
            focusable="false"
            role="presentation"
            className={`pf-spinner ${className}`}
            viewBox="0 0 66 66"
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle
                className="pf-spinner-path"
                fill="none"
                strokeWidth="6"
                cx="33"
                cy="33"
                r="30"
                stroke="var(--color-body, #000)"
            ></circle>
        </svg>
    );
};

export default Spinner;
