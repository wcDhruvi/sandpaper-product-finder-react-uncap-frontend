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
            <div className="flipping-number-div">
                {s.split("").map((elem, index) => (
                    <div className="flipping-number-box" key={index}>
                        <span className="flipping-number"> {elem}</span>
                    </div>
                ))}
            </div>
        </>
    );
}

export default FlippingNumber;