import { GlobalContext } from "@/utils/contexts/Global";
import HeroButton from "@/wrappers/HeroButton/HeroButton";
import React, { FC, useContext, useEffect } from "react";
import { useTranslation } from "react-i18next";

interface LangSwitcherProps {}

const LangSwitcher: FC<LangSwitcherProps> = () => {
  const [t, i18n] = useTranslation("common");
  const context = useContext(GlobalContext);

  function toggleLangSwitcher() {
    if (i18n.language === "fr") {
      i18n.changeLanguage("en");
    } else {
      i18n.changeLanguage("fr");
    }
  }

  useEffect(() => {
    document.title = t("document.title");
    document.documentElement.setAttribute("lang", i18n.language);
    localStorage.lang = i18n.language;
    context?.setLang(i18n.language);
  }, [i18n.language]);

  if (i18n.language === "fr") {
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
