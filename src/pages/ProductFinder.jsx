import React, { useState, useEffect } from 'react';
import qs from "qs";
import { useAppContext } from '../hooks/useAppContext';
import ProductFinderProgress from './sections/ProductFinderProgress';

const ProductFinder = () => {

    const {
        step,
        setStep,
        pickStep,
        replaceData,
        initialized
    } = useAppContext();

    const [currentStep, setCurrentStep] = useState("");

    /* -----------------------------
   Read URL Params
----------------------------- */

    const getParams = () => {
        return qs.parse(window.location.search, {
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
    }, [initialized]);

    /* -----------------------------
    Watch step
 ----------------------------- */

    useEffect(() => {
        const params = getParams();
        setCurrentStep(params.step || "");
    }, [step]);

    return (
        <>
            <ProductFinderProgress />
            {/* {(currentStep && currentStep !== '1') && <ProductFinderProgress />} */}
        </>
    )
}

export default ProductFinder