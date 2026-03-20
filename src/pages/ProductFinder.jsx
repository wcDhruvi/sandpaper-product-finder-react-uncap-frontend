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
import SpecificMaterialPicker from "../components/pickers/SpecificMaterialPicker";
import UsePicker from "../components/pickers/UsePicker";
import ThicknessPicker from "../components/pickers/ThicknessPicker";
import ApplicationPicker from "../components/pickers/ApplicationPicker";
import BackingPicker from "../components/pickers/BackingPicker";
import ProgressFooter from "../components/ProgressFooter";

const ProductFinder = () => {

    const {
        step,
        pickStep,
        replaceData,
        initialized,
        filtersLoading
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


    return (
        <>

            {(currentStep && currentStep !== '1') && <ProductFinderProgress />}
            <div className="pf-section-spacing-padding">
                <div className="pf-section-main">

                    <div className="pf-section-row">
                        {(currentStep === '1' || currentStep === '') && <MaterialPicker />}
                        {(currentStep === "specmaterial") && <SpecificMaterialPicker />}
                        {(currentStep === "use") && <UsePicker />}
                        {(currentStep === 'size') && <SizePicker />}
                        {(currentStep === "thickness") && <ThicknessPicker />}
                        {(currentStep === "attachment") && <AttachmentTypePicker />}
                        {(currentStep === "centerhole") && <HolePicker />}
                        {(currentStep === "centerholesize") && <CenterHolePicker />}
                        {(currentStep === "ventedhole") && <VentedHolePicker />}
                        {(currentStep === "application") && <ApplicationPicker />}
                        {(currentStep === "backing") && <BackingPicker />}
                        <ProgressFooter isFirstStep={currentStep === '1' || currentStep === ''} />
                    </div>


                </div>

            </div>

        </>
    );
};

export default ProductFinder;