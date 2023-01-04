import React, { FC } from "react";

interface PictoButtonsListProps {
  items: React.ReactNode[];
}

const PictoButtonsList: FC<PictoButtonsListProps> = ({ items }) => (
  <div
    data-testid="PictoButtonsList"
    className="flex flex-row items-center justify-center"
  >
    {items.map((item, key) => (
      <div key={key} className="px-1">
        {item}
      </div>
    ))}
  </div>
);

export default PictoButtonsList;
