import { FC, useContext } from "react";
import Panel from "@/wrappers/Panel/Panel";
import { useExperiences } from "../../api/getExperiences";
import {
  getLangFromGlobalContext,
  GlobalContext,
} from "@/utils/contexts/Global";
import Waiting from "@/components/Waiting/Waiting";
import UnderContruction from "@/components/UnderContruction/UnderContruction";
import PageTitle from "@/components/PageTitle/PageTitle";
import { Item } from "../Item/Item";
import PanelWaiting from "@/components/PanelWaiting/PanelWaiting";
import PanelUnderConstruction from "@/components/PanelUnderConstruction/PanelUnderConstruction";

interface ExperiencesProps {}

export const Experiences: FC<ExperiencesProps> = () => {
  const globalContext = useContext(GlobalContext);

  const query = useExperiences({
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
        <PageTitle>Mes expériences</PageTitle>
        <ul className="grid-cols-2 gap-6 xl:grid">
          {query.data.map((item, key) => (
            <Item
              description={item.description}
              duration={item.duration}
              organization={item.organization}
              type={item.type}
              startDate={item.startDate}
              role={item.role}
              key={key}
            />
          ))}
        </ul>
      </Panel>
    </div>
  );
};