import React from "react";
import { useAppContext } from "../../hooks/useAppContext";
import DeviceDiscOrbitalSander from "../icons/DeviceDiscOrbitalSander";
import DeviceRectangularOrbitalSander from "../icons/DeviceRectangularOrbitalSander";
import DeviceHandSanding from "../icons/DeviceHandSanding";
import ProgressHeader from "../ui/ProgressHeader";

const DEVICE_IMAGES = {
    "Disc Orbital Sander": DeviceDiscOrbitalSander,
    "Rectangular Orbital Sander": DeviceRectangularOrbitalSander,
    "Hand Sanding": DeviceHandSanding,
};

const SHEETS_DEVICES = ["Rectangular Orbital Sander", "Hand Sanding"];
const SPONGES_DEVICES = ["Disc Orbital Sander", "Rectangular Orbital Sander", "Hand Sanding"];

function UsePicker() {
    const { devices, material, pickDevice } = useAppContext();

    const allowedDevices =
        material === "Sheets" ? SHEETS_DEVICES :
            material === "Sponges" ? SPONGES_DEVICES :
                [];

    const filteredDevices = Object.keys(devices).filter((device) =>
        allowedDevices.includes(device)
    );

    return (
        <>
            {/* HEADER */}
            <ProgressHeader>
                <h2 className="pf-section-main-heading">
                    Use
                </h2>
            </ProgressHeader>

            {/* DEVICE SECTION */}
            <div className="pf-option-section">
                <div className="pf-grid pf-grid-cols-2 pf-gap-[2px] pf-w-full md:pf-grid-cols-[repeat(auto-fit,minmax(120px,1fr))] md:pf-gap-[15px]">

                    {filteredDevices.map((device) => {
                        const DeviceIcon = DEVICE_IMAGES[device];

                        return (
                            <button
                                key={device}
                                onClick={() => pickDevice(device, false)}
                                className="pf-flex pf-flex-col pf-items-center pf-justify-center pf-gap-[5px] pf-p-[20px] pf-bg-white pf-text-center hover:pf-bg-uneeda-primary"
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

export default UsePicker;