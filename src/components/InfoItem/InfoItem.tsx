import React, { FC, useState } from "react";
import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { GlobalContext } from "../../utils/contexts/Global";
import CaptchaModal from "../CaptchaModal/CaptchaModal";

interface InfoItemProps {
  picto: React.ReactNode;
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
  const { t } = useTranslation("common");
  const globalContext = useContext(GlobalContext);
  const [displayModal, setDisplayModal] = useState(false);
  function onClickDisplay() {
    setDisplayModal(true);
  }
  const hrefPrefix =
    specificType && specificType === "email" ? "mailto" : "tel";

  return (
    <div data-testid="InfoItem" className="grid grid-cols-12">
      <div className="col-span-2 flex max-h-12 py-2 px-2" aria-hidden="true">
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
              ({t("captcha.display")})
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
