import PageTitle from "@/components/PageTitle/PageTitle";
import PanelUnderConstruction from "@/components/PanelUnderConstruction/PanelUnderConstruction";
import PanelWaiting from "@/components/PanelWaiting/PanelWaiting";
import Panel from "@/wrappers/Panel/Panel";
import { t } from "i18next";
import React, { FC, useContext } from "react";
import { useTranslation } from "react-i18next";
import { useHobbies } from "../../api/getHobbies";
import Item from "../Item/Item";

interface HobbiesProps {}

export const Hobbies: FC<HobbiesProps> = () => {
  const { t } = useTranslation("common");
  const query = useHobbies({
    lang: localStorage.lang,
  });

  if (query.isLoading) {
    return <PanelWaiting />;
  }

  if (!query?.data || query?.data?.length === 0)
    return <PanelUnderConstruction />;

  return (
    <div data-testid="Hobbies">
      <Panel>
        <PageTitle>{t("hobbies.title")}</PageTitle>
        <ul className="grid-cols-2 gap-6 xl:grid">
          {query.data.map((item, key) => (
            <Item key={key} {...item} />
          ))}
        </ul>
      </Panel>
    </div>
  );
};
