import { lang as langType } from "@/types";
import { GlobalContext } from "@/utils/contexts/Global";
import HeroButton from "@/wrappers/HeroButton/HeroButton";
import React, { FC, useContext } from "react";

interface LangSwitcherProps {
  currentLang: langType;
}

const LangSwitcher: FC<LangSwitcherProps> = ({ currentLang }) => {
  const context = useContext(GlobalContext);

  function toggleLangSwitcher() {
    if (currentLang === "fr") {
      context?.setLang("en");
      document.documentElement.setAttribute("lang", "en");
    } else {
      context?.setLang("fr");
      document.documentElement.setAttribute("lang", "fr");
    }
  }

  if (currentLang === "fr") {
    return (
      <HeroButton
        onClick={toggleLangSwitcher}
        title={"English version"}
        lang={"en"}
      >
        EN
      </HeroButton>
    );
  } else {
    return (
      <HeroButton
        onClick={toggleLangSwitcher}
        title={"Version française"}
        lang={"fr"}
      >
        FR
      </HeroButton>
    );
  }
};

export default LangSwitcher;
