import React, { useState, useEffect } from "react";
import qs from "qs";
import { useLocation } from "react-router-dom";
import { useAppContext } from "../hooks/useAppContext";
import ProductFinderProgress from "./sections/ProductFinderProgress";
import MaterialPicker from "../components/pickers/MaterialPicker";
import SizePicker from "../components/pickers/SizePicker";
import AttachmentTypePicker from "../components/pickers/AttachmentTypePicker";
import HolePicker from "../components/pickers/HolePicker";
import CenterHolePicker from "../components/pickers/CenterHolePicker";
import VentedHolePicker from "../components/pickers/VentedHolePicker";

const ProductFinder = () => {

    const {
        step,
        pickStep,
        replaceData,
        initialized
    } = useAppContext();

    const location = useLocation();

    const [currentStep, setCurrentStep] = useState("");

    /* -----------------------------
       Read URL Params
    ----------------------------- */

    const getParams = () => {
        return qs.parse(location.search, {
            ignoreQueryPrefix: true
        });
    };

    /* -----------------------------
       Reset logic
    ----------------------------- */

    useEffect(() => {

        if (!initialized) return;

        const params = getParams();

        if (params.reset) {
            replaceData({
                material: params.material || "",
                device: params.device || ""
            });

            pickStep(params.step || "step");
        }
        

    }, [initialized, location.search]);

    /* -----------------------------
       Watch step
    ----------------------------- */

    useEffect(() => {

        const params = getParams();

        setCurrentStep(params.step || "");

    }, [location.search, step]);

    console.log("initialized", initialized)

    return (
        <>

            {(currentStep && currentStep !== '1') && <ProductFinderProgress />}
            <div className="pf-section-spacing-padding">
                <div className="pf-section-main">

                    <div className="pf-section-row">
                        {(currentStep === '1' || currentStep === '') && <MaterialPicker />}
                        {(currentStep === 'size') && <SizePicker />}
                        {(currentStep === "attachment") && <AttachmentTypePicker />}
                        {(currentStep === "centerhole") && <HolePicker />}
                        {(currentStep === "centerholesize") && <CenterHolePicker />}
                        {(currentStep === "ventedhole") && <VentedHolePicker />}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductFinder;