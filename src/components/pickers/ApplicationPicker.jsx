import React, { useState, useEffect } from 'react'
import ProgressHeader from '../ProgressHeader';
import InfoCircle from '../InfoCircle';
import { useAppContext } from '../../hooks/useAppContext';
import NotAvailable from '../NotAvailable';
import ApplicationBadge from '../ApplicationBadge';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { baseUrl } from '../../utils/Constent';
import ApplicationNextButton from '../ApplicationNextButton';

const ApplicationPicker = () => {
    const {
        step,
        material,
        device,
        application_groups,
        availableFilters,
        filtersLoading,
        pickApplication,
        getStringifiedQuery,
    } = useAppContext();

    const [selected, setSelected] = useState([]);
    const [wasLoading, setWasLoading] = useState(false);
    const [activeGroup, setActiveGroup] = useState("");
    const [showNotAvailable, setShowNotAvailable] = useState("");

    const [params] = useSearchParams();
    const navigate = useNavigate();

    // Handle belt redirect logic
    useEffect(() => {
        if (filtersLoading) {
            setWasLoading(true);
            return;
        }

        if (!filtersLoading && wasLoading) {
            if (material?.match(/belt/i) && !availableFilters.Surface.length) {
                if (material !== "Belts") {
                    navigate(`${baseUrl}/inquire/?` + getStringifiedQuery());
                }
            }
        }
    }, [material, device, filtersLoading, wasLoading, availableFilters, getStringifiedQuery]);

    // Sync activeGroup from URL
    useEffect(() => {
        setActiveGroup(params.get("activeGroup") || "");
    }, [params]);

    const handleSelectApp = (app) => {
        setSelected((prev) => {
            if (prev.includes(app)) return prev;
            return [...prev, app];
        });
    };

    const handleDeselectApp = (app) => {
        setSelected((prev) => prev.filter((s) => s !== app));
    };

    const handleNext = () => {
        if (selected.length) {
            pickApplication(selected);
        }
    };

    const handleGroupPick = (group) => {
        const query = getStringifiedQuery();
        navigate(`${baseUrl}/?${query}&step=${step}&activeGroup=${group}`);
    };



    let option = "product";
    if (step === "size") {
        option = "size";
    }

    const handleNavigate = () => {
        const query = getStringifiedQuery();
        navigate(`${baseUrl}/inquire/?${query}`);
    };

    return (
        <>
            <ProgressHeader>
                <div className='pf-flex pf-items-center pf-justify-center pf-gap-[10px]'>
                    <h2 className="pf-section-main-heading">
                        Applications
                    </h2>
                    <InfoCircle text="Choose the type of surface you are sanding." />
                </div>
            </ProgressHeader>
            {/* OPTION SECTION */}
            <div className="pf-option-section">
                <div
                    className={[
                        activeGroup ? "pf-grid pf-grid-cols-2 lg:pf-grid-cols-3 pf-w-full pf-gap-[2px] lg:pf-gap-[10px]" : "pf-grid pf-grid-cols-2 md:pf-grid-cols-4 pf-w-full lg:pf-w-auto pf-gap-0.5 lg:pf-flex lg:pf-gap-[15px]",
                    ].join(" ")}
                >
                    {Object.keys(application_groups).map((application) => {
                        if (activeGroup && activeGroup !== application) return null;

                        return (
                            <ApplicationBadge
                                key={application}
                                title={application}
                                activeGroup={activeGroup}
                                selectedSurfaces={selected}
                                availableSurfaces={availableFilters.Surface}
                                applications={application_groups[application]}
                                material={material}
                                onDisabledGroup={(group) => setShowNotAvailable(group)}
                                onPickGroup={handleGroupPick}
                                onSelect={handleSelectApp}
                                onDeselect={handleDeselectApp}
                            />
                        );
                    })}
                </div>
            </div >

            <div className='pf-flex pf-items-center pf-justify-center pf-gap-[16px]'>
                <p className='pf-text-[14px] pf-leading-[22px] sm:pf-text-base  pf-font-normal pf-text-center pf-text-black pf-mb-0'>
                    Didn’t find the {option} you need?
                </p>
                <button onClick={handleNavigate}
                    className="pf-flex pf-justify-center pf-items-center pf-gap-4 pf-py-[12px] pf-px-[24px] pf-rounded-[3px] pf-bg-white pf-text-[#004890] pf-text-center pf-text-[14px] pf-leading-[22px] md:pf-text-[16px] md:pf-leading-[24px]">
                    Custom Order
                </button>
            </div>

            <ApplicationNextButton selected={selected} handleNext={handleNext} />

            {showNotAvailable && (
                <NotAvailable
                    option={showNotAvailable}
                    onDismiss={() => setShowNotAvailable("")}
                />
            )
            }
        </>
    )
}

export default ApplicationPicker