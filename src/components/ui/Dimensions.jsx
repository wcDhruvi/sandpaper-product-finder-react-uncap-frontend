import React from "react";

function Dimensions({ children }) {
  if (typeof children === "string") {
    if (children.includes("mm")) {
      return <span className="pf-ml-1.5">mm</span>;
    }

    if (children.includes("m")) {
      return <span className="pf-ml-1.5">m</span>;
    }

    return <span>"</span>;
  }

  return <span>"</span>;
}

export default Dimensions;