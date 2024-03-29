import { FC } from "react";
import Panel from "@/wrappers/Panel/Panel";
import { Profile } from "@/features/Profile";
import { useAbout } from "../../api/getAbout";
import PageTitle from "@/components/PageTitle/PageTitle";
import DangerousHtmlContainer from "@/components/DangerousHtmlContainer/DangerousHtmlContainer";
import PanelWaiting from "@/components/PanelWaiting/PanelWaiting";
import PanelUnderConstruction from "@/components/PanelUnderConstruction/PanelUnderConstruction";

interface AboutProps {}

export const About: FC<AboutProps> = () => {
  const query = useAbout({ lang: localStorage.lang });

  if (query.isLoading) {
    return <PanelWaiting />;
  }

  if (!query?.data || query?.data?.length === 0)
    return <PanelUnderConstruction />;

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
        <DangerousHtmlContainer html={data.content} className="text-editor" />
      </Panel>
    </div>
  );
};
