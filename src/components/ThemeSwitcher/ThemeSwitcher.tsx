import React, { FC } from "react";
import SunIcon from "@heroicons/react/24/solid/SunIcon";
import MoonIcon from "@heroicons/react/24/solid/MoonIcon";
import HeroButton from "../../wrappers/HeroButton/HeroButton";

interface ThemeSwitcherProps {
  currentTheme: string;
  onThemeSwitch: (theme: string) => void;
}

const ThemeSwitcher: FC<ThemeSwitcherProps> = ({
  currentTheme,
  onThemeSwitch,
}) => {
  function toggleThemeSwitcher() {
    if (currentTheme === "dark") {
      onThemeSwitch("light");
    } else {
      onThemeSwitch("dark");
    }
  }

  return (
    <HeroButton
      classes={["rounded-full", "h-8", "w-8"]}
      onClick={toggleThemeSwitcher}
    >
      {currentTheme === "dark" ? <SunIcon /> : <MoonIcon />}
    </HeroButton>
  );
};

export default ThemeSwitcher;
