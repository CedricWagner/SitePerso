import { FC, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { FaTimes } from "react-icons/fa";
import * as focusTrap from "focus-trap";

interface ModalProps {
  display: boolean;
  title: string;
  onClose: () => void;
  children?: React.ReactNode;
}

const Modal: FC<ModalProps> = ({ title, display, onClose, children }) => {
  const { t } = useTranslation("common");
  const titleTag = useRef<HTMLHeadingElement>(null);
  const containerTag = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.onkeydown = (e: KeyboardEvent) => {
      const isEscape = e.key === "Escape" || e.key === "Esc";
      if (isEscape) {
        onClose();
      }
    };
    titleTag.current?.focus();

    if (containerTag && containerTag.current) {
      const trap = focusTrap.createFocusTrap(containerTag.current);
      trap.activate();
      return function cleanup() {
        trap.deactivate();
      };
    }
  }, []);

  return (
    <div data-testid="Modal" id="modal">
      {display ? (
        <>
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none">
            <div className="relative my-6 mx-auto w-auto max-w-3xl">
              {/*content*/}
              <div
                ref={containerTag}
                className="relative flex w-full flex-col rounded-lg border-0 bg-slate-100 shadow-lg outline-none focus:outline-none"
              >
                {/*header*/}
                <div className="flex items-start justify-between rounded-t border-b border-solid border-slate-200 p-5">
                  <h2
                    className="text-2xl font-semibold text-slate-700"
                    ref={titleTag}
                    tabIndex={0}
                  >
                    {title}
                  </h2>
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
