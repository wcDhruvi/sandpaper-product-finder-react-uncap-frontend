import React, { useState } from 'react'
import AccordionItem from "../ui/AccordionItem";
import Switch from "../ui/Switch";
import FilterList from "../FilterList";
import { useAppContext } from '../../hooks/useAppContext';

const FilterSideBar = ({ setSelectedFilters, selectedFilters }) => {

    const [activeIndex, setActiveIndex] = useState(0);

    const toggleAccordion = (index) => {
        setActiveIndex((prev) => (prev === index ? null : index));
    };

    const {
        filterWithCount
    } = useAppContext();

    const handleCheckboxChange = (type, value) => {
        setSelectedFilters((prev) => {
            const exists = prev[type]?.includes(value);

            return {
                ...prev,
                [type]: exists
                    ? prev[type].filter((v) => v !== value)
                    : [...prev[type], value],
            };
        });
    }

    return (
        <div className="
        pf-hidden 
        pf-min-h-[65px] 
        lg:pf-block 
        lg:pf-max-w-[291px] 
        lg:pf-pt-[12px] 
        lg:pf-px-[20px] 
        lg:pf-pb-[20px]
      ">

            {/* Availability */}
            <AccordionItem
                title="Availability"
                isOpen={activeIndex === 0}
                onClick={() => toggleAccordion(0)}
            >
                <Switch
                    checked={selectedFilters.inStock}
                    onChange={() =>
                        setSelectedFilters((prev) => ({
                            ...prev,
                            inStock: !prev.inStock,
                        }))
                    }
                />
            </AccordionItem>

            {/* Grit */}
            <AccordionItem
                title="Grit"
                isOpen={activeIndex === 1}
                onClick={() => toggleAccordion(1)}
            >
                <FilterList
                    data={filterWithCount["grit"]}
                    type="grit"
                    selectedFilters={selectedFilters}
                    onChange={handleCheckboxChange}
                />
            </AccordionItem>

            {/* Grain */}
            <AccordionItem
                title="Grain"
                isOpen={activeIndex === 2}
                onClick={() => toggleAccordion(2)}
            >
                <FilterList
                    data={filterWithCount["grain"]}
                    type="grain"
                    selectedFilters={selectedFilters}
                    onChange={handleCheckboxChange}
                />
            </AccordionItem>
        </div>
    )
}

export default FilterSideBar