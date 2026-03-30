import React from "react";

const Pagination = ({ page, totalPages, onPageChange }) => {

  // ✅ Ellipsis Logic
  const getPagination = (current, total) => {
    const delta = 2;
    const range = [];
    const rangeWithDots = [];

    for (let i = 1; i <= total; i++) {
      if (
        i === 1 ||
        i === total ||
        (i >= current - delta && i <= current + delta)
      ) {
        range.push(i);
      }
    }

    let prev = null;
    for (let i of range) {
      if (prev) {
        if (i - prev === 2) {
          rangeWithDots.push(prev + 1);
        } else if (i - prev > 2) {
          rangeWithDots.push("...");
        }
      }
      rangeWithDots.push(i);
      prev = i;
    }

    return rangeWithDots;
  };

  const handlePrev = () => page > 1 && onPageChange(page - 1);
  const handleNext = () => page < totalPages && onPageChange(page + 1);

  return (
    <div className="pf-flex pf-items-center pf-justify-center">
      <div className="pf-rounded-[6px] pf-border pf-border-[#D8D8D8] pf-flex pf-items-center pf-justify-center pf-gap-[15px] pf-py-[1px] pf-px-[9px] pf-border-solid">

          {/* PREV BUTTON */}
          <button
            onClick={handlePrev}
            disabled={page === 1}
            className={`pf-w-[28px] pf-h-[28px] pf-flex pf-items-center pf-justify-center pf-rounded-[6px] pf-border
            ${
              page === 1
                ? "pf-border-[#D8D8D8] pf-opacity-50 pf-cursor-not-allowed"
                : "pf-border-[#D8D8D8] hover:pf-bg-gray-100"
            }`}
          >
            <svg width="7" height="12" viewBox="0 0 7 12" fill="none">
              <path
                d="M5.65 0.65L0.65 5.65L5.65 10.65"
                stroke="currentColor"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

        {/* PAGES */}
        <div className="pf-flex pf-items-center pf-gap-[3px]">
          {getPagination(page, totalPages).map((item, index) => {
            const isActive = item === page;

            if (item === "...") {
              return (
                <span key={index} className="pf-px-[6px] pf-text-[12px]">
                  ...
                </span>
              );
            }

            return (
              <button
                key={index}
                onClick={() => onPageChange(item)}
                className={`pf-min-w-[28px] pf-h-[28px] pf-flex pf-items-center pf-justify-center pf-text-[12px] pf-leading-[18px]
                ${
                  isActive
                    ? "pf-text-[#004890] pf-font-bold pf-border-b-2 pf-border-[#004890] pf-border-solid"
                    : "pf-text-black hover:pf-bg-gray-100"
                }`}
              >
                {item}
              </button>
            );
          })}
        </div>

          {/* NEXT BUTTON */}
          <button
            onClick={handleNext}
            disabled={page === totalPages}
            className={`pf-w-[28px] pf-h-[28px] pf-flex pf-items-center pf-justify-center pf-rounded-[6px] pf-border
            ${
              page === totalPages
                ? "pf-border-[#D8D8D8] pf-opacity-50 pf-cursor-not-allowed"
                : "pf-border-[#D8D8D8] hover:pf-bg-gray-100"
            }`}
          >
            <svg width="7" height="12" viewBox="0 0 7 12" fill="none">
              <path
                d="M1.35 0.65L6.35 5.65L1.35 10.65"
                stroke="currentColor"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
  );
};

export default Pagination;  