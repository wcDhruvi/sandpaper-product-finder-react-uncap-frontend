import React from "react";
import FinderProgress from "../../components/FinderProgress";
import { useAppContext } from "../../hooks/useAppContext";
import FlippingNumber from "../../components/FlippingNumber";
import IconRefresh from "../../utils/icons/IconRefresh";
import "../../assets/css/product-finder-progress.css"

function ProductFinderProgress() {

    const {
        material,
        resetData,
        getStringifiedQuery,
        resultsCount
    } = useAppContext();

    const pathname = window.location.pathname;

    const isResults = pathname.startsWith("/product-finder/results/");

    return (
        <>
            <div className=" product-finder-progress-container">
                <div className="product-finder-progress container">
                    <button className="refresh-icon-btn lg-refresh-btn" onClick={resetData}>
                        <IconRefresh />
                    </button>

                    <FinderProgress />

                    {material === "Belts" ? (

                        <div className="results-wrapper lg-results-wrapper">

                            <div className="results-container">
                                <a href={`/product-finder/results?${getStringifiedQuery()}`}
                                    className="show-result-text" >
                                    Show results
                                </a>
                            </div>

                        </div>) :
                        <div className="countdown-timer-box lg-countdown-time">
                            <div className="countdown-timer">
                                <p className="product-found-text">
                                    Product found:
                                </p>

                                <FlippingNumber num={resultsCount} />
                                <a className="show-result-text">
                                    Show Results
                                </a>

                            </div>
                        </div>}

                </div>
            </div>

            {material === "Belts" ? <div className="results-wrapper sm-results-wrapper">
                <div className="results-container container">
                    <a href={`/product-finder/results?${getStringifiedQuery()}`}
                        className="show-result-text" >
                        Show results
                    </a>
                </div>

            </div> : <div className="sm-countdown-time-box">
                <div className=" container ">
                    <div className="sm-countdown-time">
                        <p className="sm-product-found-text">
                            Product found:
                        </p>

                        <FlippingNumber num={resultsCount} />

                        <a className="sm-show-result-text">
                            Show Results
                        </a>
                    </div>
                </div>
            </div>}
        </>
    );
}

export default ProductFinderProgress;