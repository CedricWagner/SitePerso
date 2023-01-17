import { FC, useContext } from "react";
import Panel from "@/wrappers/Panel/Panel";
import { Profile } from "@/features/Profile";
import { useExperiences } from "../../api/getExperiences";
import {
  getLangFromGlobalContext,
  GlobalContext,
} from "@/utils/contexts/Global";
import Waiting from "@/components/Waiting/Waiting";
import UnderContruction from "@/components/UnderContruction/UnderContruction";
import PageTitle from "@/components/PageTitle/PageTitle";
import { Item } from "../Item/Item";

interface ExperiencesProps {}

export const Experiences: FC<ExperiencesProps> = () => {
  const globalContext = useContext(GlobalContext);

  const query = useExperiences({
    lang: getLangFromGlobalContext(globalContext),
  });

  if (query.isLoading) {
    return (
      <div data-testid="Experiences">
        <Panel>
          <Waiting size="lg" isInline={false} />
        </Panel>
      </div>
    );
  }

  if (!query?.data || query?.data?.length === 0)
    return (
      <div data-testid="Experiences">
        <Panel>
          <UnderContruction />
        </Panel>
      </div>
    );

  return (
    <div data-testid="Experiences">
      <Panel>
        <PageTitle>Mes expériences</PageTitle>
        <ul>
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
