import DangerousHtmlContainer from "@/components/DangerousHtmlContainer/DangerousHtmlContainer";
import InnerPanel from "@/wrappers/InnerPanel/InnerPanel";
import React, { FC } from "react";
import { Experience as ExperienceType } from "../../types";

export const Item: FC<ExperienceType> = ({
  organization,
  type,
  duration,
  role,
  description,
}) => (
  <li data-testid="ExperienceItem" className="mb-4 xl:mb-0">
    <InnerPanel classNames={["h-full"]}>
      <h4 className="inline text-lg font-bold">{organization}</h4>,
      <span className="pl-1 after:pl-1 after:content-['—']">{type}</span>
      <span className="pl-1 italic">{role}</span>
      <p className="size-sm mb-1 text-slate-400">{duration}</p>
      <DangerousHtmlContainer html={description} className="text-editor" />
    </InnerPanel>
  </li>
);
