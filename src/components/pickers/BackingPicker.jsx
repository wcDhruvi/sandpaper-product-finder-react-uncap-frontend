import React, { useState } from "react";
import { useAppContext } from "../../hooks/useAppContext";
import ProgressHeader from "../ui/ProgressHeader";
import NotAvailable from "../NotAvailable";
import InfoCircle from "../ui/InfoCircle";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

const BACKING_INFO = `
    This is the type of material over which the abrasive grain is applied.
    Backing material is either paper, cloth or film.
    <ul class='pf-mt-2 -f-space-y-2'>
        <li class='list-disc pf-ml-5'>
            Paper: The most versatile option for normal sanding. 
            Good for light to medium sanding, creates less friction and heat.
        </li>
        <li class='list-disc pf-ml-5'>
            Cloth: A more durable and tear-resistant option than paper. 
            Good for high stock removal, metal and hard surfaces, and wet polishing applications.
        </li>
        <li class='list-disc pf-ml-5'>
            Film: A very durable, tear resistant and waterproof material. 
            Excellent for finish sanding and applications that require water.
        </li>
    </ul>
`;

function BackingPicker() {
  const {
    material,
    pickBackingMaterial,
    getBackingMaterials,
    availableFilters,
  } = useAppContext();

  const mats = getBackingMaterials();
  const isBelts = material === "Belts";

  const [showNotAvailable, setShowNotAvailable] = useState('');

  const sizeBoxClassName = (selectable) =>
    twMerge(
      clsx(
        "pf-grow pf-flex pf-items-center pf-justify-center pf-gap-4 pf-text-center pf-font-bold pf-text-black pf-cursor-pointer  pf-transition  pf-p-[20px] pf-text-[16px] pf-leading-[24px] lg:pf-text-[20px] lg:pf-leading-[28px]",
        !selectable ? "pf-bg-disable" : "pf-bg-white hover:pf-bg-uneeda-primary"
      )
    );

  return (
    <>
      {/* HEADER */}
      <ProgressHeader>
        <div className="pf-flex pf-items-center pf-justify-center pf-gap-[10px]">
          <h2 className="pf-section-main-heading">Backing Material</h2>
          <InfoCircle text={BACKING_INFO} />
        </div>
      </ProgressHeader>

      {/* BACKING SECTION */}
      <div className="pf-option-section">
        <div className="pf-grid pf-grid-cols-2 lg:pf-grid-cols-3 pf-w-full pf-gap-[2px] lg:pf-gap-[10px]">

          {Object.keys(mats).map((mat) => {
            const isSelectable = isBelts || availableFilters["Material Type"].includes(mat);

            return (
              <button
                key={mat}
                onClick={() => {
                  if (isSelectable) {
                    pickBackingMaterial(mat);
                  } else {
                    setShowNotAvailable(`${mat} backing`);
                  }
                }}
                className={sizeBoxClassName(isSelectable)}
              >
                {mat}
              </button>
            );
          })}

        </div>
      </div>

      {/* NOT AVAILABLE MODAL */}
      {showNotAvailable && (
        <NotAvailable
          option={showNotAvailable}
          onDismiss={() => setShowNotAvailable('')}
        />
      )}
    </>
  );
}

export default BackingPicker;