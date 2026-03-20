import React from 'react'
import BackButton from './BackButton'
import NotSureButton from './NotSureButton'

const ProgressFooter = ({ isFirstStep = false }) => {

    const showButtons = isFirstStep != true
    return (

        <>
            {showButtons && <div className={`pf-flex pf-items-center pf-justify-between pf-gap-[5px] pf-flex-wrap container`}>
                <div className={`pf-flex pf-items-center pf-justify-between pf-w-full`}>
                    {showButtons && <BackButton />}
                    {showButtons && <NotSureButton />}
                </div>

            </div>}
        </>
    )
}

export default ProgressFooter