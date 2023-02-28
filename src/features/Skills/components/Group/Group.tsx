import Waiting from "@/components/Waiting/Waiting";
import {
  getLangFromGlobalContext,
  GlobalContext,
} from "@/utils/contexts/Global";
import InnerPanel from "@/wrappers/InnerPanel/InnerPanel";
import React, { FC, useContext } from "react";
import { useSkills } from "../../api/getSkills";
import Item from "../Item/Item";

interface SkillGroupProps {
  name: string;
  id: number;
}

export const Group: FC<SkillGroupProps> = ({ name, id }) => {
  const globalContext = useContext(GlobalContext);

  const query = useSkills({
    lang: getLangFromGlobalContext(globalContext),
    groupId: id,
  });

  if (!query?.data || query?.data?.length === 0) return <></>;

  return (
    <li data-testid="SkillGroup" className="mb-4 xl:mb-0">
      <InnerPanel classNames={["h-full"]}>
        <h3 className="mb-2 text-lg font-bold">{name}</h3>
        {query.isLoading && <Waiting />}
        <ul>
          {query.data.map((item, key) => (
            <Item
              key={key}
              name={item.name}
              rating={item.rating}
              details={item.details}
            />
          ))}
        </ul>
      </InnerPanel>
    </li>
  );
};
