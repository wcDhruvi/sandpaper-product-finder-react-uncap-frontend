import React, { useState } from "react";
import CustomSelect from "../../components/ui/CustomSelect";
import FilterDrawer from "./FilterDrawer";
import { defaultSelectedFilter } from "../../utils/Common";
import RemoveIcon from "../../utils/icons/RemoveIcon";
import FilterIcon from "../../utils/icons/FilterIcon";

const FilterBar = ({ productCount, filteredProductCount, selectedFilters, setSelectedFilters, loading }) => {

    const removeFilter = (filterToRemove) => {
        setSelectedFilters((prev) => {
            const updated = { ...prev };

            if (Array.isArray(updated[filterToRemove.key])) {
                const newArr = updated[filterToRemove.key].filter(
                    (v) => v !== filterToRemove.value
                );

                // ✅ instead of delete → set empty array
                updated[filterToRemove.key] = newArr.length ? newArr : [];
            } else if (typeof updated[filterToRemove.key] === "boolean") {
                // ✅ for boolean (like inStock)
                updated[filterToRemove.key] = false;
            }

            return updated;
        });
    };

    const clearAllFilters = () => {
        setSelectedFilters(defaultSelectedFilter);
    };

    const sortOptions = [
        { label: "Popularity", value: "popularity" },
    ];

    const [sortBy, setSortBy] = useState("popularity");
    const [showDrawer, setShowDrawer] = useState(false);

    const formattedFilters = Object.entries(selectedFilters || {}).flatMap(
        ([key, value]) => {
            if (Array.isArray(value) && value.length > 0) {
                return value.map((v) => ({
                    key,
                    label: v,
                    value: v,
                }));
            }

            if (typeof value === "boolean" && value) {
                return [
                    {
                        key,
                        label: key == "inStock" ? "In Stock" : '',
                        value,
                    },
                ];
            }

            return [];
        }
    );

    return (
        <>
            <div className="pf-flex pf-flex-col-reverse lg:pf-flex-row pf-justify-between lg:pf-pb-[5px] lg:pf-justify-end lg:pf-items-center pf-gap-[15px] lg:pf-gap-[24px] pf-self-stretch    ">

                {/* ✅ LEFT SIDE — Applied Filters */}
                <div className={` pf-flex-wrap pf-items-center pf-gap-[10px] pf-flex-1 lg:pf-flex ${formattedFilters?.length == 0 ? 'pf-hidden' : ''}`}>
                    {/* Filter Chips */}
                    <div className="pf-flex pf-flex-wrap pf-text-[0.8125rem] pf-gap-[6px] pf-ml-0 pf-mr-auto pf-items-center ">
                        {formattedFilters.map((filter, index) => (

                            <div
                                key={`${filter.key}-${filter.value}-${index}`}
                                className="pf-inline-flex pf-items-center pf-h-[32px] pf-rounded-[6px] pf-border pf-border-solid pf-border-[#dadce0] pf-p-[8px] pf-transitionhover:pf-text-[#2c2d2e] hover:pf-border-[#2c2d2e]focus:pf-text-[#000000] focus:pf-outline-none"
                            >

                                {filter.label}

                                {/* Remove Button */}
                                <button
                                    onClick={() => removeFilter(filter)}
                                    className="  pf-w-[18px] pf-h-[18px] "
                                >
                                    <RemoveIcon />
                                </button>
                            </div>
                        ))}
                        {formattedFilters?.length > 0 && (
                            <a
                                onClick={clearAllFilters}
                                className="pf-underline pf-text-[#004890] pf-font-medium"
                            >
                                Clear all
                            </a>
                        )}
                    </div>
                    {/* Clear All */}

                </div>

                {/* ✅ RIGHT SIDE — Sort + Count */}


                {/* Sort */}
                <div className="pf-hidden lg:pf-block">
                    <CustomSelect
                        options={sortOptions}
                        value={sortBy}
                        onChange={setSortBy}
                    />
                </div>

                {/* Mobile Sticky Button */}
                <div className="pf-flex  pf-justify-between pf-items-center pf-gap-[24px] pf-self-stretch ">

                    <button className="pf-flex pf-items-center pf-justify-center pf-text-[15px] pf-font-medium pf-cursor-pointer lg:pf-hidden pf-gap-[10px]" onClick={() => setShowDrawer(true)}>
                        <FilterIcon />
                        Filter & Sort
                    </button>

                    {/* Product Count */}
                    {loading ? <div className="loading-overlay--sticky">
                        <div className="pf-loader small"></div>
                    </div> : (productCount > 0 ? <div className="pf-text-[13px]">
                        {productCount !== filteredProductCount ? `${filteredProductCount} of ${productCount} products` : `${productCount} products`}
                    </div> : '')}

                </div>
            </div>

            {showDrawer && (
                <FilterDrawer onDismiss={() => setShowDrawer(false)} selectedFilters={selectedFilters} setSelectedFilters={setSelectedFilters} productCount={productCount} sortOptions={sortOptions} sortBy={sortBy} setSortBy={setSortBy} />
            )}

        </>
    );
};

export default FilterBar;