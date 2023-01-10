import Bars3Icon from "@heroicons/react/24/solid/Bars3Icon";
import XMarkIcon from "@heroicons/react/24/solid/XMarkIcon";
import React, { FC } from "react";
import HeroButton from "../../wrappers/HeroButton/HeroButton";

interface MenuBurgerProps {
  isOpen: boolean;
  onToggle: () => void;
}

const MenuBurger: FC<MenuBurgerProps> = ({ isOpen, onToggle }) => {
  function toggle() {
    onToggle();
  }

  return (
    <HeroButton
      onClick={toggle}
      classes={["rounded-full", "h-8", "w-8", "lg:hidden"]}
    >
      {isOpen ? <XMarkIcon /> : <Bars3Icon />}
    </HeroButton>
  );
};

export default MenuBurger;
