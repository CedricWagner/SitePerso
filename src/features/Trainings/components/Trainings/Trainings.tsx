import PageTitle from "@/components/PageTitle/PageTitle";
import PanelUnderConstruction from "@/components/PanelUnderConstruction/PanelUnderConstruction";
import PanelWaiting from "@/components/PanelWaiting/PanelWaiting";
import Panel from "@/wrappers/Panel/Panel";
import { t } from "i18next";
import React, { FC, useContext } from "react";
import { useTranslation } from "react-i18next";
import { useTrainings } from "../../api/getTrainings";
import Item from "../Item/Item";

interface TrainingsProps {}

export const Trainings: FC<TrainingsProps> = () => {
  const { t } = useTranslation("common");
  const query = useTrainings({
    lang: localStorage.lang,
  });

  if (query.isLoading) {
    return <PanelWaiting />;
  }

  if (!query?.data || query?.data?.length === 0)
    return <PanelUnderConstruction />;

  return (
    <div data-testid="Experiences">
      <Panel>
        <PageTitle>{t("trainings.title")}</PageTitle>
        <ul className="grid-cols-2 gap-6 xl:grid">
          {query.data.map((item, key) => (
            <Item key={key} {...item} />
          ))}
        </ul>
      </Panel>
    </div>
  );
};
