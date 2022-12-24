import { FC } from "react";
import Panel from "../../wrappers/Panel/Panel";
import NavigationItem from "../NavigationItem/NavigationItem";
import UserIcon from "@heroicons/react/24/solid/UserIcon";
import TrophyIcon from "@heroicons/react/24/solid/TrophyIcon";
import CodeBracketIcon from "@heroicons/react/24/solid/CodeBracketIcon";
import HeartIcon from "@heroicons/react/24/solid/HeartIcon";
import ChartBarIcon from "@heroicons/react/24/solid/ChartBarIcon";

interface NavigationProps {}

const Navigation: FC<NavigationProps> = () => (
  <Panel>
    <div data-testid="Navigation" className="flex space-x-4">
      <NavigationItem href="/" title="Présentation" picto={<UserIcon />} />
      <NavigationItem
        href="/experiences"
        title="Experiences"
        picto={<ChartBarIcon />}
      />
      <NavigationItem
        href="/competences"
        title="Compétences"
        picto={<CodeBracketIcon />}
      />
      <NavigationItem
        href="/formations"
        title="Formations"
        picto={<TrophyIcon />}
      />
      <NavigationItem href="/loisirs" title="Loisirs" picto={<HeartIcon />} />
    </div>
  </Panel>
);

export default Navigation;
