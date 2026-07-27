import React, { useState } from 'react'
import AccordionItem from "../ui/AccordionItem";
import Switch from "../ui/Switch";
import FilterList from "../FilterList";
import { useAppContext } from '../../hooks/useAppContext';

const FilterSideBar = ({ setSelectedFilters, selectedFilters }) => {

    const [openSections, setOpenSections] = useState({
        availability: true,
        grit: true,
        grain: true,
    });

    const toggleSection = (section) => {
        setOpenSections((prev) => ({
            ...prev,
            [section]: !prev[section],
        }));
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
                isOpen={openSections.availability}
                onClick={() => toggleSection("availability")}
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
                isOpen={openSections.grit}
                onClick={() => toggleSection("grit")}
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
                isOpen={openSections.grain}
                onClick={() => toggleSection("grain")}
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