import React, { FC, useState } from "react";
import { useContext } from "react";
import { GlobalContext } from "../../utils/contexts/Global";

interface InfoItemProps {
  picto: React.ComponentProps<"svg">;
  label: string;
  value: string;
  mustVerify?: boolean;
}

const InfoItem: FC<InfoItemProps> = ({
  label,
  picto,
  value,
  mustVerify = false,
}) => {
  const globalContext = useContext(GlobalContext);
  function onClickDisplay() {
    globalContext?.setVerified(true); // TODO: add captcha
  }
  return (
    <div data-testid="InfoItem" className="grid grid-cols-12">
      <div className="col-span-2 flex py-2 px-2">{picto}</div>
      <div className="col-span-10 flex">
        <div>
          <label className="block text-sm text-slate-600 dark:text-slate-400">
            {label}
          </label>
          {mustVerify && !globalContext?.isVerified ? (
            <>
              <span>xxx</span>
              <button
                className="pl-1 text-sm underline hover:text-primary hover:dark:text-secondary"
                onClick={onClickDisplay}
              >
                (afficher)
              </button>
            </>
          ) : (
            <span>{value}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default InfoItem;
