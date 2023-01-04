import React, { FC } from "react";
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
  return (
    <div data-testid="InfoItem" className="grid grid-cols-12">
      <div className="col-span-2 flex py-2 px-2">{picto}</div>
      <div className="col-span-10 flex">
        <div>
          <label className="block text-sm text-slate-600 dark:text-slate-400">
            {label}
          </label>
          <span className="">
            {mustVerify && !globalContext?.isVerified ? "xxx" : value}
          </span>
        </div>
      </div>
    </div>
  );
};

export default InfoItem;
