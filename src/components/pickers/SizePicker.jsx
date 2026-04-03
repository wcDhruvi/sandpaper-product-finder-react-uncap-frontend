import React, { useState } from 'react'
import { useAppContext } from '../../hooks/useAppContext'
import ProgressHeader from '../ui/ProgressHeader';
import InfoCircle from '../ui/InfoCircle';
import SizeFormat from '../ui/SizeFormat';
import MaskedInchInput from "../MaskedInchInput";
import clsx from "clsx";
import SymbolX from '../icons/SymbolX';

const COMMON_DISC_SIZES = ["3", "5", "6", "8"];

const SizePicker = () => {

  const { material, device, getSizes, pickSize } = useAppContext();
  const sizes = getSizes();

  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");

  const [widthValid, setWidthValid] = useState(true);
  const [heightValid, setHeightValid] = useState(true);

  const gridClassName = 'pf-grid pf-grid-cols-2 lg:pf-grid-cols-4 pf-w-full pf-justify-stretch pf-flex-wrap pf-gap-[2px] lg:pf-gap-[10px]'
  const sizeBoxClassName = 'pf-grow pf-text-center pf-flex pf-items-center pf-justify-center pf-font-bold pf-text-black pf-cursor-pointer pf-bg-white hover:pf-bg-uneeda-primary pf-p-[20px] pf-text-[16px] pf-leading-[24px] lg:pf-text-[20px] lg:pf-leading-[28px]'

  const handleSubmit = (e) => {
    e.preventDefault();

    const cleanWidth = width.replace(/width\: /i, "").replace(/\"/, "");
    const cleanHeight = height.replace(/height\: /i, "").replace(/\"/, "");

    if (cleanWidth && cleanHeight) {
      pickSize(cleanWidth, cleanHeight);
    } else {
      if (!cleanWidth) setWidthValid(false);
      if (!cleanHeight) setHeightValid(false);
    }
  };

  const SizeOption = ({ className = "", onClick, title }) => {
    return (
      <div
        onClick={onClick}
        className={`${sizeBoxClassName} ${className}`}
      >
        <SizeFormat size={title} />
      </div>
    );
  };

  return (
    <>
      <ProgressHeader>
        <div className='pf-flex pf-items-center pf-justify-center pf-gap-[10px]'>
          <h2 className="pf-section-main-heading">
            Size
          </h2>
          <InfoCircle text="Choose the size of the abrasives you are looking for. For belts, you need to choose the width and the length." />
        </div>
      </ProgressHeader>

      <div className='pf-option-section'>

        {/* ================= DISCS ================= */}

        {material === "Discs" && (
          <>
            <div className={gridClassName}>
              {sizes
                .filter(device === "Benchtop Sander"
                  ? () => true
                  : (size) => COMMON_DISC_SIZES.includes(size)
                )
                .map((size) => (
                  <div
                    key={size}
                    onClick={() => pickSize(size)}
                    className={sizeBoxClassName}
                  >
                    {size}"
                  </div>
                ))}
            </div>

            {/* OTHER OPTIONS */}
            {device !== "Benchtop Sander" && (
              <div className='pf-flex pf-flex-col pf-items-start pf-gap-5 pf-self-stretch'>
                <h3 className="pf-sub-section-heading">Other options</h3>
                <div className={gridClassName}>
                  {sizes
                    .filter((size) => !COMMON_DISC_SIZES.includes(size))
                    .map((size) => (
                      <SizeOption
                        key={size}
                        title={size}
                        onClick={() => pickSize(size)}
                      />
                    ))}
                </div>
              </div>
            )}
          </>
        )}

        {/* ================= BELTS ================= */}

        {["Belts", "Wide Belts", "Narrow Belts"].includes(material) && (
          <>
            <div className='pf-flex pf-flex-col pf-items-start pf-gap-5 pf-self-stretch'>
              <h3 className="pf-sub-section-heading">Most Common</h3>
              <div className={gridClassName}>
                {sizes.map((size) => {
                  const [w, h] = size.split("x");
                  return (
                    <SizeOption
                      key={size}
                      title={size}
                      onClick={() => pickSize(w, h)}
                    />
                  );
                })}
              </div>
            </div>

            {/* OTHER SIZE */}
            <div className="pf-bg-white pf-p-6 pf-flex pf-flex-col pf-items-start pf-gap-5 pf-self-stretch pf-w-full">
              <h3 className="pf-sub-section-heading">Other size</h3>
              <form
                className="pf-flex pf-flex-col pf-items-center pf-justify-center pf-w-full pf-gap-5"
                onSubmit={handleSubmit}
              >
                <div className="pf-flex pf-items-center pf-justify-center pf-gap-4 pf-flex-wrap sm:pf-flex-nowrap">
                  <MaskedInchInput
                    className={clsx(
                      "focus:pf-border-gray-400 focus:pf-border-1",
                      !widthValid && "pf-border-red-500"
                    )}
                    placeholder="Enter width"
                    inputValue={width}
                    inputChange={(value) => {
                      setWidth(value);
                      setWidthValid(true);
                    }}
                    mask='Width: NNNN"'
                  />
                  <span className="pf-hidden sm:pf-inline">
                    <SymbolX />
                  </span>
                  <MaskedInchInput
                    className={clsx(
                      "focus:pf-border-gray-400 focus:pf-border-1",
                      !heightValid && "pf-border-red-500"
                    )}
                    placeholder="Enter height"
                    inputValue={height}
                    inputChange={(value) => {
                      setHeight(value);
                      setHeightValid(true);
                    }}
                    mask='Height: NNNN"'
                  />
                </div>
                <button
                  type="submit"
                  className="pf-transition-all pf-text-lg pf-text-gray-900 pf-bg-uneeda-primary pf-font-medium pf-rounded pf-py-3 pf-px-20 pf-w-full sm:pf-w-auto"
                >
                  Next
                </button>
              </form>
            </div>
          </>
        )}

        {/* ================= SHEETS ================= */}

        {material === "Sheets" && (
          <div className='pf-flex pf-flex-col pf-items-start pf-gap-5 pf-self-stretch'>
            <h3 className="pf-sub-section-heading">Other options</h3>
            <div className={gridClassName}>
              {sizes.map((size) => {
                const [w, h] = size.split("x");
                return (
                  <SizeOption
                    key={size}
                    title={size}
                    onClick={() => pickSize(w, h)}
                  />
                );
              })}
            </div>
          </div>
        )}

        {/* ================= ROLLS ================= */}

        {material === "Rolls" && (
          <div className='pf-flex pf-flex-col pf-items-start pf-gap-5 pf-self-stretch'>
            <h3 className="pf-sub-section-heading">Most Common</h3>
            <div className={gridClassName}>
              {sizes.map((size) => {
                let split = size.split('x');
                let parts = split.slice(0);
                return (
                  <SizeOption
                    key={size}
                    title={`${size}m`}
                    onClick={() => pickSize(parts[0], parts[1])}
                  />
                );
              })}
            </div>
          </div>
        )}

        {/* ================= SPONGES ================= */}

        {material === "Sponges" && (
          <>
            {/* Disc Orbital Sander */}
            {device === "Disc Orbital Sander" && (
              <>
                <div className='pf-flex pf-flex-col pf-items-start pf-gap-5 pf-self-stretch'>
                  <h3 className="pf-sub-section-heading">Most Common</h3>
                  <div className={gridClassName}>
                    {sizes
                      .filter((size) => COMMON_DISC_SIZES.includes(size))
                      .map((size) => (
                        <SizeOption
                          key={size}
                          title={size}
                          onClick={() => pickSize(size)}
                        />
                      ))}
                  </div>
                </div>

                <div className='pf-flex pf-flex-col pf-items-start pf-gap-5 pf-self-stretch'>
                  <h3 className="pf-sub-section-heading">Other options</h3>
                  <div className={gridClassName}>
                    {sizes
                      .filter((size) => !COMMON_DISC_SIZES.includes(size))
                      .map((size) => (
                        <SizeOption
                          key={size}
                          title={size}
                          onClick={() => pickSize(size)}
                        />
                      ))}
                  </div>
                </div>
              </>
            )}

            {/* Rectangular Orbital Sander */}
            {device === "Rectangular Orbital Sander" && (
              <div className='pf-flex pf-flex-col pf-items-start pf-gap-5 pf-self-stretch'>
                <div className={gridClassName}>
                  {sizes
                    .filter((size) => size.includes("x"))
                    .map((size) => {
                      const [w, h] = size.split("x");
                      return (
                        <SizeOption
                          key={size}
                          title={size}
                          onClick={() => pickSize(w, h || undefined)}
                        />
                      );
                    })}
                </div>
              </div>
            )}
          </>
        )}

      </div>
    </>
  );
};

export default SizePicker;