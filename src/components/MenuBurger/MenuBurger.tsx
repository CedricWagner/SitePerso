import Bars3Icon from "@heroicons/react/24/solid/Bars3Icon";
import XMarkIcon from "@heroicons/react/24/solid/XMarkIcon";
import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import HeroButton from "../../wrappers/HeroButton/HeroButton";

interface MenuBurgerProps {
  isOpen: boolean;
  onToggle: () => void;
}

const MenuBurger: FC<MenuBurgerProps> = ({ isOpen, onToggle }) => {
  const [t] = useTranslation("common");
  function toggle() {
    onToggle();
  }

  return (
    <HeroButton
      onClick={toggle}
      classes={["rounded-full", "h-8", "w-8", "lg:hidden"]}
      title={isOpen ? t("menu.close") : t("menu.open")}
    >
      {isOpen ? <XMarkIcon /> : <Bars3Icon />}
    </HeroButton>
  );
};

export default MenuBurger;
