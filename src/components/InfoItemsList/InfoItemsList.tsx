import React, { FC } from "react";

interface InfoItemsListProps {
  items: React.ReactNode[];
}

const InfoItemsList: FC<InfoItemsListProps> = ({ items }) => (
  <address data-testid="InfoItemsList" className="not-italic">
    {items.map((item, key) => (
      <div
        key={key}
        className="mb-4 border-b border-b-slate-400 pb-4 transition-colors last:mb-0 last:border-b-0 last:pb-0"
      >
        {item}
      </div>
    ))}
  </address>
);

export default InfoItemsList;
