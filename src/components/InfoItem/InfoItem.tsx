import React, { FC } from "react";

interface InfoItemProps {
  picto: any;
  label: string;
  value: string;
}

const InfoItem: FC<InfoItemProps> = ({ label, picto, value }) => (
  <div data-testid="InfoItem">
    {picto}
    {label}
    {value}
  </div>
);

export default InfoItem;
