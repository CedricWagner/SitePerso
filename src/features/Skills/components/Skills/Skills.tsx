import PageTitle from "@/components/PageTitle/PageTitle";
import PanelUnderConstruction from "@/components/PanelUnderConstruction/PanelUnderConstruction";
import PanelWaiting from "@/components/PanelWaiting/PanelWaiting";
import Panel from "@/wrappers/Panel/Panel";
import React, { FC, useContext } from "react";
import { useTranslation } from "react-i18next";
import { useSkillGroups } from "../../api/getSkillGroups";
import { Group } from "../Group/Group";

interface SkillsProps {}

export const Skills: FC<SkillsProps> = () => {
  const { t } = useTranslation("common");
  const query = useSkillGroups({
    lang: localStorage.lang,
  });

  if (query.isLoading) {
    return <PanelWaiting />;
  }

  if (!query?.data || query?.data?.length === 0)
    return <PanelUnderConstruction />;

  return (
    <div data-testid="Skills">
      <Panel>
        <PageTitle>{t("skills.title")}</PageTitle>
        <ul className="grid-cols-2 gap-6 xl:grid">
          {query.data.map((item, key) => (
            <Group name={item.name} id={item.id} key={key} />
          ))}
        </ul>
      </Panel>
    </div>
  );
};
