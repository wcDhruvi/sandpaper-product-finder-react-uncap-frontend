import React from "react";
import { useAppContext } from "../../hooks/useAppContext";
// device images
import DeviceBenchtopSander from "../../utils/icons/DeviceBenchtopSander";
import DeviceDiscOrbitalSander from "../../utils/icons/DeviceDiscOrbitalSander";
import DeviceRectangularOrbitalSander from "../../utils/icons/DeviceRectangularOrbitalSander";
import DeviceWideBeltSander from "../../utils/icons/DeviceWideBeltSander";
import DeviceNarrowBeltSander from "../../utils/icons/DeviceNarrowBeltSander";
import DevicePortableBeltSander from "../../utils/icons/DevicePortableBeltSander";
import DeviceDrumSander from "../../utils/icons/DeviceDrumSander";
import DeviceHandSanding from "../../utils/icons/DeviceHandSanding";



function MaterialPicker() {

  const { materials, devices, pickMaterial, pickDevice } = useAppContext();

  const deviceImages = {
    "Disc Orbital Sander": DeviceDiscOrbitalSander,
    "Rectangular Orbital Sander": DeviceRectangularOrbitalSander,
    "Wide Belt Sander": DeviceWideBeltSander,
    "Narrow Belt Sander": DeviceNarrowBeltSander,
    "Portable Belt Sander": DevicePortableBeltSander,
    "Drum Sander": DeviceDrumSander,
    "Benchtop Sander": DeviceBenchtopSander,
    "Hand Sanding": DeviceHandSanding
  };

  return (
    <>

      {/* HEADER */}
      <div className="pf-flex pf-flex-col pf-items-center pf-gap-[10px] pf-self-stretch">

        <p className="pf-small-text">
          Not sure what to look for?
        </p>

        <h2 className="pf-section-main-heading">
          Use our Product Finder
        </h2>

      </div>


      {/* MATERIAL SECTION */}
      <div className="pf-option-section">

        <div className="pf-option-title">
          Search by Materials
        </div>

        <div className="pf-grid pf-grid-cols-2 pf-gap-[2px] pf-w-full md:pf-flex md:pf-justify-center md:pf-gap-[10px]">

          {Object.keys(materials).map((material) => (

            <button
              key={material}
              onClick={() => pickMaterial(material)}
              className="pf-flex pf-items-center pf-justify-center pf-p-[16px] pf-bg-white md:pf-flex-1 hover:pf-bg-[#FFE411]"
            >

              <span className="pf-text-black pf-text-center pf-font-bold pf-text-[16px] pf-leading-[24px] md:pf-text-[20px] md:pf-leading-[28px]">
                {material}
              </span>

            </button>

          ))}

        </div>

      </div>


      {/* DEVICE SECTION */}
      <div className="pf-option-section">

        <div className="pf-option-title">
          or by Devices
        </div>

        <div className="pf-grid pf-grid-cols-2 pf-gap-[2px] pf-w-full md:pf-grid-cols-4 md:pf-gap-[15px] lg:pf-grid-cols-[repeat(auto-fit,minmax(120px,1fr))]">

          {Object.keys(devices).map((device) => {

            const DeviceIcon = deviceImages[device];

            return (

              <button
                key={device}
                onClick={() => pickDevice(device)}
                className="pf-flex pf-flex-col pf-items-center pf-justify-center pf-gap-[5px] pf-p-[20px] pf-bg-white pf-text-center hover:pf-bg-[#FFE411]"
              >

                <div className="pf-w-[100px] pf-h-[100px]">
                  {DeviceIcon && <DeviceIcon />}
                </div>

                <span className="pf-text-black pf-text-center pf-font-bold pf-text-[14px] pf-leading-[22px] md:pf-text-[16px] md:pf-leading-[24px]">
                  {device}
                </span>

              </button>

            );

          })}

        </div>

      </div>
    </>
  );
}

export default MaterialPicker;