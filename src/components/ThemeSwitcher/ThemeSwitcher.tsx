import React, { FC } from "react";
import SunIcon from "@heroicons/react/24/solid/SunIcon";
import MoonIcon from "@heroicons/react/24/solid/MoonIcon";
import HeroButton from "../../wrappers/HeroButton/HeroButton";
import { useTranslation } from "react-i18next";

interface ThemeSwitcherProps {
  currentTheme: string;
  onThemeSwitch: (theme: string) => void;
}

const ThemeSwitcher: FC<ThemeSwitcherProps> = ({
  currentTheme,
  onThemeSwitch,
}) => {
  const [t] = useTranslation("common");
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
      title={t("theme.switch", {
        theme: currentTheme === "dark" ? "light" : "dark",
      })}
    >
      {currentTheme === "dark" ? <SunIcon /> : <MoonIcon />}
    </HeroButton>
  );
};

export default ThemeSwitcher;
