import React, { useState, useEffect } from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

function MaskedInchInput({
  inputValue = "",
  inputChange,
  placeholder,
  mask = 'NNNN"',
  className,
  maxDigits = 4, // max number of digits allowed
}) {
  const [displayValue, setDisplayValue] = useState("");

  // Extract prefix (everything before "NNNN") and suffix (everything after)
  const prefix = mask.includes("NNNN") ? mask.split("NNNN")[0] : "";
  const suffix = mask.includes("NNNN") ? mask.split("NNNN")[1] : '"';

  // Build full display: prefix + numbers + suffix
  const buildDisplay = (numbers) => {
    if (!numbers) return "";
    return `${prefix}${numbers}${suffix}`;
  };

  useEffect(() => {
    setDisplayValue(inputValue ? buildDisplay(inputValue) : "");
  }, [inputValue]);

  const handleChange = (e) => {
    let value = e.target.value;

    // Remove prefix before extracting digits
    if (prefix && value.startsWith(prefix)) {
      value = value.slice(prefix.length);
    }

    // Strip non-digits, cap at maxDigits
    const numbers = value.replace(/\D/g, "").slice(0, maxDigits);

    if (!numbers) {
      setDisplayValue("");
      inputChange?.("");
      return;
    }

    setDisplayValue(buildDisplay(numbers));
    inputChange?.(numbers); // returns raw digits e.g. "54"
  };

  return (
    <input
      type="text"
      value={displayValue}
      placeholder={placeholder}
      onChange={handleChange}
      className={twMerge(
        clsx(
          "pf-w-full pf-bg-white pf-border pf-border-[#E5E5E5] pf-rounded pf-h-14 pf-mb-0 pf-text-lg",
          className
        )
      )}
    />
  );
}

export default MaskedInchInput;