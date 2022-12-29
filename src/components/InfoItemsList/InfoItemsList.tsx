import React, { FC } from "react";

interface InfoItemsListProps {
  items: any[];
}

const InfoItemsList: FC<InfoItemsListProps> = ({ items }) => (
  <div data-testid="InfoItemsList">
    {items.map((item) => (
      <div>{item}</div>
    ))}
  </div>
);

export default InfoItemsList;
