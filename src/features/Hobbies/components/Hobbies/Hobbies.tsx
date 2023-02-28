import PageTitle from "@/components/PageTitle/PageTitle";
import PanelUnderConstruction from "@/components/PanelUnderConstruction/PanelUnderConstruction";
import PanelWaiting from "@/components/PanelWaiting/PanelWaiting";
import {
  getLangFromGlobalContext,
  GlobalContext,
} from "@/utils/contexts/Global";
import Panel from "@/wrappers/Panel/Panel";
import React, { FC, useContext } from "react";
import { useHobbies } from "../../api/getHobbies";
import Item from "../Item/Item";

interface HobbiesProps {}

export const Hobbies: FC<HobbiesProps> = () => {
  const globalContext = useContext(GlobalContext);

  const query = useHobbies({
    lang: getLangFromGlobalContext(globalContext),
  });

  if (query.isLoading) {
    return <PanelWaiting />;
  }

  if (!query?.data || query?.data?.length === 0)
    return <PanelUnderConstruction />;

  return (
    <div data-testid="Hobbies">
      <Panel>
        <PageTitle>Mes loisirs</PageTitle>
        <ul className="grid-cols-2 gap-6 xl:grid">
          {query.data.map((item, key) => (
            <Item key={key} {...item} />
          ))}
        </ul>
      </Panel>
    </div>
  );
};
