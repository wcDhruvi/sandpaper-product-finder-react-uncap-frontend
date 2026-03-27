import React, { useId } from 'react'

const FilterList = ({ data = [], type, selectedFilters, onChange }) => {

  const baseId = useId();

  return (
    <ul className="pf-list-none pf-m-0 pf-p-0 pf-overflow-y-scroll pf-max-h-[250px] pf-no-scrollbar">
      {data?.map((item, index) => {
        const optionValue = item?.[type];
        const optionCount = item?.count || 0;
        const id = `${baseId}-${type}-${index}`;
        const isChecked = selectedFilters?.[type]?.includes(optionValue);
        const isDisabled = optionCount === 0;

        return (
          <li
            key={id}
            className={`pf-flex pf-py-[2px] pf-items-center pf-gap-[8px] pf-self-stretch ${isDisabled ? "pf-opacity-50 pf-cursor-not-allowed" : "pf-cursor-pointer"
              }`}
          >
            <input
              type="checkbox"
              id={id}
              disabled={isDisabled}
              className="pf-w-[14px] pf-h-[14px] pf-border pf-border-[#7A7A7A] pf-accent-[#004890] pf-cursor-pointer disabled:pf-cursor-not-allowed"
              checked={isChecked}
              onChange={() => !isDisabled && onChange(type, optionValue)}
            />
            <label
              htmlFor={id}
              className={`pf-text-black pf-text-[14px] pf-leading-[20px] pf-font-normal pf-flex pf-gap-[4px] ${isDisabled ? "pf-cursor-not-allowed" : "pf-cursor-pointer"
                }`}
            >
              <span>{optionValue}</span>
              <span className="pf-opacity-[0.6] pf-whitespace-nowrap">
                ({optionCount})
              </span>
            </label>
          </li>
        );
      })}
    </ul>
  );
};

export default FilterList

