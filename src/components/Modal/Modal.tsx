import React, { FC, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { FaCross, FaTimes } from "react-icons/fa";

interface ModalProps {
  display: boolean;
  title: string;
  onClose: () => void;
}

const Modal: FC<ModalProps> = ({ title, display, onClose, children }) => {
  const { t } = useTranslation("common");
  const titleTag = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    document.onkeydown = (e: KeyboardEvent) => {
      const isEscape = e.key === "Escape" || e.key === "Esc";
      if (isEscape) {
        onClose();
      }
    };
    titleTag.current?.focus();
  }, []);

  return (
    <div data-testid="Modal">
      {display ? (
        <>
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none">
            <div className="relative my-6 mx-auto w-auto max-w-3xl">
              {/*content*/}
              <div className="relative flex w-full flex-col rounded-lg border-0 bg-slate-100 shadow-lg outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between rounded-t border-b border-solid border-slate-200 p-5">
                  <h3
                    className="text-2xl font-semibold text-slate-700"
                    ref={titleTag}
                    tabIndex={0}
                  >
                    {title}
                  </h3>
                  <button
                    className="btn btn-light float-right"
                    onClick={() => onClose()}
                  >
                    <FaTimes size={20} className="text-slate-700" />
                  </button>
                </div>
                {/*body*/}
                <div className="relative min-w-[25rem] flex-auto p-6 text-slate-700">
                  {children}
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end rounded-b border-t border-solid border-slate-200 p-6">
                  <button
                    className="btn btn-light"
                    type="button"
                    onClick={() => onClose()}
                  >
                    {t("modal.close")}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="fixed inset-0 z-40 bg-black opacity-50"></div>
        </>
      ) : null}
    </div>
  );
};

export default Modal;
