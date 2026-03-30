import React, { useState } from "react";
import CustomSelect from "../../components/ui/CustomSelect";
import FilterDrawer from "./FilterDrawer";
import { defaultSelectedFilter } from "../../utils/Common";

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
                                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7 1L1 7M7 7L1 1" stroke="#000" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </svg>
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
                        <svg width="18" height="15" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.6353 0C10.2113 0 9.00624 0.98375 8.66192 2.30198H0.767325C0.563197 2.30198 0.368906 2.38314 0.223803 2.52824C0.0811594 2.67334 0 2.86763 0 3.07176C0 3.27589 0.0811594 3.47018 0.223803 3.61528C0.368906 3.76039 0.563197 3.84155 0.767325 3.84155H8.66192C9.00624 5.16223 10.2113 6.14844 11.6353 6.14844C13.0593 6.14844 14.2668 5.16223 14.6112 3.84155H17.0164C17.2206 3.84155 17.4148 3.76039 17.5599 3.61528C17.705 3.47018 17.7838 3.27589 17.7838 3.07176C17.7838 2.86763 17.7026 2.67334 17.5599 2.52824C17.4173 2.3856 17.2206 2.30198 17.0164 2.30198H14.6136C14.2668 0.98375 13.0593 0 11.6353 0ZM11.6353 1.53465C12.4936 1.53465 13.1724 2.2159 13.1724 3.07176C13.1724 3.92762 12.4936 4.60887 11.6353 4.60887C10.777 4.60887 10.0982 3.93008 10.0982 3.07176C10.0982 2.21344 10.777 1.53465 11.6353 1.53465ZM6.14844 7.85156C4.72446 7.85156 3.51691 8.83777 3.1726 10.1585H0.769785C0.565657 10.1585 0.371366 10.2396 0.226263 10.3847C0.0811594 10.5274 0 10.7217 0 10.9258C0 11.1299 0.0811594 11.3242 0.223803 11.4693C0.368906 11.6144 0.563197 11.6956 0.767325 11.6956H3.17014C3.51445 13.0162 4.72446 14 6.14598 14C7.56996 14 8.77751 13.0162 9.12429 11.6956H17.0189C17.223 11.6956 17.4173 11.6144 17.5624 11.4693C17.7075 11.3242 17.7862 11.1299 17.7862 10.9258C17.7862 10.7217 17.705 10.5274 17.5624 10.3823C17.4173 10.2396 17.2206 10.156 17.0164 10.156H9.12429C8.77997 8.83531 7.56996 7.85156 6.14844 7.85156ZM6.14844 9.38867C7.00676 9.38867 7.68555 10.0675 7.68555 10.9258C7.68555 11.7841 7.00676 12.4629 6.14844 12.4629C5.29012 12.4629 4.61133 11.7816 4.61133 10.9258C4.60887 10.0675 5.29012 9.38867 6.14844 9.38867Z" fill="#000"></path>
                        </svg>
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