import { lang as langType } from "@/types";
import {
  getLangFromGlobalContext,
  GlobalContext,
} from "@/utils/contexts/Global";
import HeroButton from "@/wrappers/HeroButton/HeroButton";
import React, { FC, useContext, useEffect } from "react";
import { useTranslation } from "react-i18next";

interface LangSwitcherProps {
  currentLang: langType;
}

const LangSwitcher: FC<LangSwitcherProps> = ({ currentLang }) => {
  const context = useContext(GlobalContext);
  const [t, i18n] = useTranslation("common");

  function toggleLangSwitcher() {
    if (currentLang === "fr") {
      context?.setLang("en");
    } else {
      context?.setLang("fr");
    }
  }

  useEffect(() => {
    const contextLang = getLangFromGlobalContext(context);
    i18n.changeLanguage(contextLang);
    document.title = t("document.title");
    document.documentElement.setAttribute("lang", contextLang);
    localStorage.lang = contextLang;
  }, [context?.lang]);

  if (currentLang === "fr") {
    return (
      <HeroButton
        onClick={toggleLangSwitcher}
        title={t("lang.switch")}
        lang={"en"}
      >
        EN
      </HeroButton>
    );
  } else {
    return (
      <HeroButton
        onClick={toggleLangSwitcher}
        title={t("lang.switch")}
        lang={"fr"}
      >
        FR
      </HeroButton>
    );
  }
};

export default LangSwitcher;
