import DangerousHtmlContainer from "@/components/DangerousHtmlContainer/DangerousHtmlContainer";
import InnerPanel from "@/wrappers/InnerPanel/InnerPanel";
import React, { FC } from "react";
import { Hobby } from "../../types";

const Item: FC<Hobby> = ({ name, description }) => (
  <li data-testid="HobbyItem" className="mb-4">
    <InnerPanel classNames={["h-full"]}>
      <h3 className="mb-2 text-lg font-bold">{name}</h3>
      <DangerousHtmlContainer html={description} />
    </InnerPanel>
  </li>
);

export default Item;
