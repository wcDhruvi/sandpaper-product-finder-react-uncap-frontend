import React from 'react'
import { createPortal } from "react-dom";
import "../../assets/css/NextButton.css";

const ApplicationNextButton = ({ handleNext, selected }) => {
    return createPortal(
        <div className="pf-next-wrapper">
            <button
                type="button"
                onClick={handleNext}
                className={`pf-next-btn ${selected.length ? "show" : "hide"}`}
            >
                <span className="pf-next-label">Next</span>
            </button>
        </div>, document.body
    )
}

export default ApplicationNextButton