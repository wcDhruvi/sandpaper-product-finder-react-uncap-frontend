import React from 'react'

const Loading = ({ className = "" }) => {
    return (
        <div className={`pf-loading-overlay ${className}`}>
            <div className="loading-overlay--sticky">
                <div className="pf-loader"></div>
            </div>
        </div>
    )
}

export default Loading