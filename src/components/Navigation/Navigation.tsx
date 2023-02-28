import { FC } from "react";
import Panel from "../../wrappers/Panel/Panel";
import NavigationItem from "../NavigationItem/NavigationItem";
import UserIcon from "@heroicons/react/24/solid/UserIcon";
import TrophyIcon from "@heroicons/react/24/solid/TrophyIcon";
import CodeBracketIcon from "@heroicons/react/24/solid/CodeBracketIcon";
import HeartIcon from "@heroicons/react/24/solid/HeartIcon";
import ChartBarIcon from "@heroicons/react/24/solid/ChartBarIcon";

interface NavigationProps {
  isMobileMenuOpen?: boolean;
  onItemSelect: () => void;
}

const Navigation: FC<NavigationProps> = ({
  isMobileMenuOpen = false,
  onItemSelect,
}) => (
  <>
    {isMobileMenuOpen && (
      <div className="fixed left-0 top-16 z-0 h-full w-full bg-dark bg-opacity-50 lg:hidden"></div>
    )}
    <div
      className={`z-1 top-16 right-0 w-full lg:static lg:block ${
        isMobileMenuOpen ? "fixed" : "hidden"
      }`}
    >
      <Panel>
        <div data-testid="Navigation" className="flex-wrap gap-4 lg:flex">
          <NavigationItem
            href="/"
            title="Présentation"
            picto={<UserIcon />}
            onSelect={onItemSelect}
          />
          <NavigationItem
            href="/experiences"
            title="Experiences"
            picto={<ChartBarIcon />}
            onSelect={onItemSelect}
          />
          <NavigationItem
            href="/competences"
            title="Compétences"
            picto={<CodeBracketIcon />}
            onSelect={onItemSelect}
          />
          <NavigationItem
            href="/formations"
            title="Formations"
            picto={<TrophyIcon />}
            onSelect={onItemSelect}
          />
          <NavigationItem
            href="/loisirs"
            title="Loisirs"
            picto={<HeartIcon />}
            onSelect={onItemSelect}
          />
        </div>
      </Panel>
    </div>
  </>
);

export default Navigation;
