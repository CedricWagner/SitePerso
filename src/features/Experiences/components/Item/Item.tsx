import DangerousHtmlContainer from "@/components/DangerousHtmlContainer/DangerousHtmlContainer";
import React, { FC } from "react";
import { Experience as ExperienceType } from "../../types";

export const Item: FC<ExperienceType> = ({
  organization,
  type,
  duration,
  role,
  description,
}) => (
  <li data-testid="ExperienceItem">
    <h4 className="text-lg font-bold">{organization}</h4>
    <span>{type}</span>
    <span>{duration}</span>
    <span>{role}</span>
    <DangerousHtmlContainer html={description} className="text-editor" />
  </li>
);
