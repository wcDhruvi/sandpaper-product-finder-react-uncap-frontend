import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import { useAppContext } from "../hooks/useAppContext";
import Close from "./icons/Close";
import { baseUrl, inquireUrl } from "../utils/Constants";
import "../assets/css/NotAvailable.css";

export default function NotAvailable({ onDismiss, option }) {
    const { getStringifiedQuery, material, device, getStep, step } = useAppContext();

    const [show, setShow] = useState(false);
    const [mounted, setMounted] = useState(false);

    const q = getStringifiedQuery();
    const deviceSingular = material ? material.replace(/s$/, "") : "";

    useEffect(() => {
        setMounted(true);
        setShow(true);
    }, []);

    const hide = () => {
        setShow(false);
        setTimeout(() => onDismiss?.(), 400);
    };

    if (!mounted) return null;

    return createPortal(
        <div className={`pf-modal-wrapper ${show ? "show" : ""}`}>

            {/* ── Backdrop ── */}
            <div className="pf-modal-backdrop" onClick={hide} />

            {/* ── Modal card ── */}
            <div className="pf-modal-card">

                {/* Close */}
                <div className="pf-modal-close-row">
                    <button
                        type="button"
                        aria-label="Close"
                        onClick={hide}
                        className="pf-modal-close-btn"
                    >
                        <Close />
                    </button>
                </div>

                {/* Body */}
                <div className="pf-modal-body">
                    <div className="pf-modal-inner">

                        <p className="pf-modal-heading">
                            <span className="option">{option}</span>
                            {" is not available for this configuration."}
                        </p>

                        <div className="pf-modal-inquire-box">
                            <p className="pf-modal-inquire-text">
                                Didn't find the product you need?
                            </p>
                            <a
                                href={`${inquireUrl}?${q}&step=${step}`}
                                className="pf-modal-btn-yellow"
                            >
                                Inquire Now
                            </a>
                        </div>

                        <Link
                            to={`${baseUrl}?reset=1&material=${material}&device=${device}&step=${getStep(device, material)}`}
                            onClick={hide}
                            className="pf-modal-btn-blue"
                        >
                            Find another {deviceSingular}
                        </Link>

                    </div>
                </div>
            </div>
        </div>,
        document.body
    );
}