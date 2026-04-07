import React, { useState, useEffect } from 'react';
import ProgressHeader from '../ui/ProgressHeader';
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import InfoCircle from '../ui/InfoCircle';
import { useAppContext } from '../../hooks/useAppContext';
import NotAvailable from '../NotAvailable';

const AttachmentTypePicker = () => {

  const { getAttachments, pickAttachment } = useAppContext();

  const attachments = getAttachments();

  const [showNotAvailable, setShowNotAvailable] = useState("");

  return (
    <>
      <ProgressHeader>
        <div className='pf-flex pf-items-center pf-justify-center pf-gap-[10px]'>
          <h2 className="pf-section-main-heading">
            Attachment Type
          </h2>
          <InfoCircle text="Choose the type of abrasive attachment.<br />You can only choose from PSA (sticky back), Hook & Loop (Uneevel) or plain (no attachment)." />
        </div>
      </ProgressHeader>
      <div className='pf-option-section'>
        <div className="pf-grid pf-grid-cols-2 lg:pf-flex pf-w-full pf-gap-0.5 lg:pf-gap-2.5">
          {Object.keys(attachments).map((attachment) => {
            let attachmentTitle = attachment;

            if (attachment?.match(/sticky back/i)) {
              attachmentTitle = attachmentTitle.replace(
                "(Sticky back)",
                '<span class="pf-text-[#7F7F7F]">(Sticky back)</span>'
              );
            } else if (attachment?.match(/uneevel/i)) {
              attachmentTitle = attachmentTitle.replace(
                "(Uneevel)",
                '<span class="pf-text-[#7F7F7F]">(Uneevel)</span>'
              );
            }

            const selectable = attachments[attachment].Selectable;
            
            return (
              <div
                key={attachment}
                onClick={() => {
                  if (selectable) {
                    pickAttachment(attachment);
                  } else {
                    setShowNotAvailable(attachment);
                  }
                }}
                className={twMerge(
                  clsx(
                    "pf-flex pf-flex-col pf-justify-center pf-items-center pf-text-center pf-cursor-pointer",
                    "pf-text-base  lg:pf-text-xl pf-font-bold",
                    "pf-transition",
                    "pf-p-5 lg:pf-grow",
                    selectable && "  pf-bg-white hover:pf-bg-uneeda-primary",
                    !selectable && "pf-bg-disable"
                  )
                )}
              >
                <span
                  dangerouslySetInnerHTML={{
                    __html: attachmentTitle,
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>

      {showNotAvailable ? (
        <NotAvailable
          option={showNotAvailable}
          onDismiss={() => setShowNotAvailable("")}
        />
      ) : null}

    </>
  )
}

export default AttachmentTypePicker