import React from 'react';
import { useAppContext } from '../../hooks/useAppContext';
import ProgressHeader from '../ui/ProgressHeader';

const SpecificMaterialPicker = () => {

    const { device, materials, devices, pickMaterial } = useAppContext();
    const availableMaterials = devices[device]?.Materials || [];

    const filteredMaterials = Object.keys(materials).filter(
        (material) => availableMaterials.includes(material)
    );

    return (
        <>
            <ProgressHeader>
                <h2 className="pf-section-main-heading">
                    Material
                </h2>
            </ProgressHeader>

            <div className="pf-option-section">
                <div className="pf-grid pf-grid-cols-2 pf-gap-[2px] pf-w-full md:pf-flex md:pf-justify-center md:pf-gap-[10px]">

                    {filteredMaterials.map((material) => (
                        <button
                            key={material}
                            onClick={() => pickMaterial(material, false)}
                            className="pf-flex pf-items-center pf-justify-center pf-p-[16px] pf-bg-white md:pf-flex-1 hover:pf-bg-uneeda-primary"
                        >
                            <span className="pf-text-black pf-text-center pf-font-bold pf-text-[16px] pf-leading-[24px] md:pf-text-[20px] md:pf-leading-[28px]">
                                {material}
                            </span>
                        </button>
                    ))}
                </div>
            </div>
        </>
    );
}

export default SpecificMaterialPicker;