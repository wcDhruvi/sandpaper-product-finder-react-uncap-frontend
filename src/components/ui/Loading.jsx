import React from 'react'
import Spinner from '../icons/Spinner'

const Loading = ({ className = "", noBackdrop = false }) => {
    return (
        <div className={`pf-loading-overlay ${noBackdrop ? 'no-backdrop' : ''} ${className}`}>
            <div className="pf-loading-overlay--sticky">
                <Spinner />
            </div>
        </div>
    )
}

export default Loading