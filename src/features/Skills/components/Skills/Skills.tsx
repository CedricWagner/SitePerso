import PageTitle from "@/components/PageTitle/PageTitle";
import PanelUnderConstruction from "@/components/PanelUnderConstruction/PanelUnderConstruction";
import PanelWaiting from "@/components/PanelWaiting/PanelWaiting";
import {
  getLangFromGlobalContext,
  GlobalContext,
} from "@/utils/contexts/Global";
import Panel from "@/wrappers/Panel/Panel";
import React, { FC, useContext } from "react";
import { useSkillGroups } from "../../api/getSkillGroups";
import { SkillGroup } from "../SkillGroup/SkillGroup";

interface SkillsProps {}

export const Skills: FC<SkillsProps> = () => {
  const globalContext = useContext(GlobalContext);

  const query = useSkillGroups({
    lang: getLangFromGlobalContext(globalContext),
  });

  if (query.isLoading) {
    return <PanelWaiting />;
  }

  if (!query?.data || query?.data?.length === 0)
    return <PanelUnderConstruction />;

  return (
    <div data-testid="Skills">
      <Panel>
        <PageTitle>Mes compétences</PageTitle>
        <ul className="grid-cols-2 gap-6 lg:grid">
          {query.data.map((item, key) => (
            <SkillGroup name={item.name} id={item.id} key={key} />
          ))}
        </ul>
      </Panel>
    </div>
  );
};
