import { FC, useContext } from "react";
import Panel from "@/wrappers/Panel/Panel";
import { Profile } from "@/features/Profile";
import { useAbout } from "../../api/getAbout";
import {
  getLangFromGlobalContext,
  GlobalContext,
} from "@/utils/contexts/Global";
import { FaSpinner } from "react-icons/fa";
import Waiting from "@/components/Waiting/Waiting";
import UnderContruction from "@/components/UnderContruction/UnderContruction";
import PageTitle from "@/components/PageTitle/PageTitle";
import DangerousHtmlContainer from "@/components/DangerousHtmlContainer/DangerousHtmlContainer";

interface AboutProps {}

export const About: FC<AboutProps> = () => {
  const globalContext = useContext(GlobalContext);

  const query = useAbout({ lang: getLangFromGlobalContext(globalContext) });

  if (query.isLoading) {
    return (
      <div data-testid="About">
        <Panel>
          <Waiting size="lg" isInline={false} />
        </Panel>
      </div>
    );
  }

  if (!query?.data || query?.data?.length === 0)
    return (
      <div data-testid="About">
        <Panel>
          <UnderContruction />
        </Panel>
      </div>
    );

  const data = query.data[0];
  return (
    <div data-testid="About">
      <div className="block md:hidden">
        <Profile />
      </div>
      <Panel>
        <PageTitle>
          <DangerousHtmlContainer html={data.title} />
        </PageTitle>
        <div className="text-editor">
          <DangerousHtmlContainer html={data.content} />
        </div>
      </Panel>
    </div>
  );
};
