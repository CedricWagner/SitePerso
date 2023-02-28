import DangerousHtmlContainer from "@/components/DangerousHtmlContainer/DangerousHtmlContainer";
import InnerPanel from "@/wrappers/InnerPanel/InnerPanel";
import React, { FC } from "react";
import { Training } from "../../types";

const Item: FC<Training> = ({
  name,
  description,
  location,
  qualification,
  date,
}) => {
  return (
    <li data-testid="TrainingItem" className="mb-4 xl:mb-0">
      <InnerPanel classNames={["h-full"]}>
        <h4 className="inline text-lg font-bold">{name}</h4>,
        <span className="pl-1 after:pl-1 after:content-['—']">{location}</span>
        <span className="pl-1 italic">{qualification}</span>
        <p className="size-sm mb-1 text-slate-400">{date}</p>
        <DangerousHtmlContainer html={description} className="text-editor" />
      </InnerPanel>
    </li>
  );
};

export default Item;
