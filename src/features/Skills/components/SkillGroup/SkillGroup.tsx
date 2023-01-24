import InnerPanel from "@/wrappers/InnerPanel/InnerPanel";
import React, { FC } from "react";

interface SkillGroupProps {
  name: string;
  id: number;
}

export const SkillGroup: FC<SkillGroupProps> = ({ name, id }) => (
  <li data-testid="SkillGroup">
    <InnerPanel>
      <h3 className="text-lg font-bold">{name}</h3>
      {id}
    </InnerPanel>
  </li>
);
