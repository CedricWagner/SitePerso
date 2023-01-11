import React, { FC, useState } from "react";
import { useContext } from "react";
import { GlobalContext } from "../../utils/contexts/Global";
import CaptchaModal from "../CaptchaModal/CaptchaModal";
import Modal from "../Modal/Modal";

interface InfoItemProps {
  picto: React.ComponentProps<"svg">;
  label: string;
  value: string;
  mustVerify?: boolean;
  specificType?: "phone" | "email";
}

const InfoItem: FC<InfoItemProps> = ({
  label,
  picto,
  value,
  mustVerify = false,
  specificType,
}) => {
  const globalContext = useContext(GlobalContext);
  const [displayModal, setDisplayModal] = useState(false);
  function onClickDisplay() {
    setDisplayModal(true);
  }
  const hrefPrefix =
    specificType && specificType === "email" ? "mailto" : "tel";

  return (
    <div data-testid="InfoItem" className="group grid grid-cols-12">
      <div className="col-span-2 flex max-h-12 py-2 px-2 transition-all group-hover:animate-spin">
        {picto}
      </div>
      <div className="col-span-10 flex">
        <div>
          <span className="block text-sm text-slate-600 dark:text-slate-400">
            {label}
          </span>
          {mustVerify && !globalContext?.isVerified ? (
            <button
              data-testid="InfoItem__button"
              className="pl-1 text-sm underline hover:text-primary hover:dark:text-secondary"
              onClick={onClickDisplay}
            >
              (afficher)
            </button>
          ) : (
            <>
              {specificType ? (
                <a
                  href={`${hrefPrefix}:${value}`}
                  target="_blank"
                  className="underline"
                  data-testid="InfoItem__type"
                >
                  {value}
                </a>
              ) : (
                <span data-testid="InfoItem__value">{value}</span>
              )}
            </>
          )}
          {displayModal && (
            <CaptchaModal onClose={() => setDisplayModal(false)} />
          )}
        </div>
      </div>
    </div>
  );
};

export default InfoItem;
