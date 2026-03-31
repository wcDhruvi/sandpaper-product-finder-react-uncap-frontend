import React from "react";
import Fraction from "./Fraction";
import Dimensions from "./Dimensions";

function SizeFormat({ size }) {

  if (typeof size !== "string") {
    size = String(size);
  }

  if (size.includes("x")) {

    let split = size.split("x");

    split[0] = split[0].trim();
    split[1] = split[1]?.trim();

    return (
      <span className="pf-flex pf-flex-wrap">

        <Fraction>{split[0]}</Fraction>
        <Dimensions>{split[0]}</Dimensions>

        {split[1] && (
          <span>
            {" x "}
            <Fraction>{split[1]}</Fraction>
            <Dimensions>{split[1]}</Dimensions>
          </span>
        )}

      </span>
    );
  }

  return (
    <span>
      <Fraction>{size}</Fraction>
      <Dimensions>{size}</Dimensions>
    </span>
  );
}

export default SizeFormat;