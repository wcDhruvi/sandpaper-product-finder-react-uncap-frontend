import React from 'react'
import BackButton from './BackButton'
import NotSureButton from './NotSureButton'

const ProgressHeader = ({ title, isFirstStep = false, children }) => {

    const showButtons = isFirstStep != true
    return (
        <div className={`pf-flex pf-items-center pf-justify-between pf-gap-[5px] pf-flex-wrap ${isFirstStep !== true ? "pf-w-full" : ""}`}>
            <div className={`pf-flex pf-items-center pf-justify-between pf-w-full ${isFirstStep == true ? "pf-hidden sm:pf-inline" : ""}`}>
                {showButtons && <BackButton />}
                <div className="pf-hidden sm:pf-inline">{children}</div>
                {showButtons && <NotSureButton />}
            </div>
            <div className={`pf-flex pf-items-center pf-justify-center pf-w-full pf-inline sm:pf-hidden`}>
                {children}
            </div>
        </div>
    )
}

export default ProgressHeader