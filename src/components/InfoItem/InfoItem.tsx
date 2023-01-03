import React, { FC } from "react";

interface InfoItemProps {
  picto: React.ComponentProps<"svg">;
  label: string;
  value: string;
}

const InfoItem: FC<InfoItemProps> = ({ label, picto, value }) => (
  <div data-testid="InfoItem" className="grid grid-cols-12">
    <div className="col-span-2 flex py-2 px-2">{picto}</div>
    <div className="col-span-10 flex">
      <div>
        <label className="block text-sm text-slate-600 dark:text-slate-400">
          {label}
        </label>
        <span className="">{value}</span>
      </div>
    </div>
  </div>
);

export default InfoItem;
