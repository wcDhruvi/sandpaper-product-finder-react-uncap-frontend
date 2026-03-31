import React from "react";

function Fraction({ children }) {

  if (typeof children === "string") {

    const split = children.split(" ");

    if (split[1] && split[1].includes("/")) {

      const fraction = split[1].split("/");

      return (
        <span>
          {split[0]}{" "}{fraction[0]} / {fraction[1]}
        </span>
      );
    }

    return children.replace(/["m]/g, "");
  }

  return null;
}

export default Fraction;