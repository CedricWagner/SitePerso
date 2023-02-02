import PageTitle from "@/components/PageTitle/PageTitle";
import PanelUnderConstruction from "@/components/PanelUnderConstruction/PanelUnderConstruction";
import PanelWaiting from "@/components/PanelWaiting/PanelWaiting";
import {
  getLangFromGlobalContext,
  GlobalContext,
} from "@/utils/contexts/Global";
import Panel from "@/wrappers/Panel/Panel";
import React, { FC, useContext } from "react";
import { useTrainings } from "../../api/getTrainings";
import Item from "../Item/Item";

interface TrainingsProps {}

export const Trainings: FC<TrainingsProps> = () => {
  const globalContext = useContext(GlobalContext);

  const query = useTrainings({
    lang: getLangFromGlobalContext(globalContext),
  });

  if (query.isLoading) {
    return <PanelWaiting />;
  }

  if (!query?.data || query?.data?.length === 0)
    return <PanelUnderConstruction />;

  return (
    <div data-testid="Experiences">
      <Panel>
        <PageTitle>Mes formations</PageTitle>
        <ul className="grid-cols-2 gap-6 xl:grid">
          {query.data.map((item, key) => (
            <Item key={key} {...item} />
          ))}
        </ul>
      </Panel>
    </div>
  );
};
