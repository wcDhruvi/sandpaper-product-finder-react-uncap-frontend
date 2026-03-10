import React from "react";

function Dimensions({ children }) {

  if (typeof children === "string") {

    if (children.includes("mm")) {
      return mm;
    }

    if (children.includes("m")) {
      return m;
    }

    return <span>"</span>;
  }

  return <span>"</span>;
}

export default Dimensions;