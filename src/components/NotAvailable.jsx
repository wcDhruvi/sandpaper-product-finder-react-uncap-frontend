import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import { useAppContext } from "../hooks/useAppContext";
import Close from "../utils/icons/Close";
import { baseUrl } from "../utils/Constent";
import "../assets/css/NotAvailable.css";

export default function NotAvailable({ onDismiss, option }) {
    const { getStringifiedQuery, material, step, device } = useAppContext();

    const [show, setShow] = useState(false);
    const [mounted, setMounted] = useState(false);

    const q = getStringifiedQuery();
    const deviceSingular = material ? material.replace(/s$/, "") : "";

    useEffect(() => {
        setMounted(true);
        const originalStyle = window.getComputedStyle(document.body).overflowY;
        document.body.style.overflowY = "hidden";
        setShow(true);
        return () => {
            document.body.style.overflowY = originalStyle;
        };
    }, []);

    const hide = () => {
        setShow(false);
        setTimeout(() => onDismiss?.(), 500);
    };

    if (!mounted) return null;

    return createPortal(
        <div className={`modal-wrapper ${show ? "show" : ""}`}>

            {/* ── Backdrop ── */}
            <div className="modal-backdrop" onClick={hide} />

            {/* ── Modal card ── */}
            <div className="modal-card">

                {/* Close */}
                <div className="modal-close-row">
                    <button
                        type="button"
                        aria-label="Close"
                        onClick={hide}
                        className="modal-close-btn"
                    >
                        <Close />
                    </button>
                </div>

                {/* Body */}
                <div className="modal-body">
                    <div className="modal-inner">

                        <p className="modal-heading">
                            <span className="option">{option}</span>
                            {" is not available for this configuration."}
                        </p>

                        <div className="modal-inquire-box">
                            <p className="modal-inquire-text">
                                Didn't find the product you need?
                            </p>
                            <Link
                                to={`${baseUrl}/inquire/?${q}&step=${step}`}
                                className="modal-btn-yellow"
                            >
                                Inquire Now
                            </Link>
                        </div>

                        <Link
                            to={`${baseUrl}?reset=1&material=${material}&device=${device}&step=size`}
                            onClick={hide}
                            className="modal-btn-blue"
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