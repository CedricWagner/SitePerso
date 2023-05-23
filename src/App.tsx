import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import ThemeSwitcher from "./components/ThemeSwitcher/ThemeSwitcher";
import { About } from "./features/About";
import { GlobalContext, GlobalContextInterface } from "./utils/contexts/Global";
import MenuBurger from "./components/MenuBurger/MenuBurger";
import { Profile } from "./features/Profile";
import { QueryClientProvider } from "react-query";
import { queryClient } from "@/lib/react-query";
import { Experiences } from "./features/Experiences";
import { Skills } from "./features/Skills";
import { Trainings } from "./features/Trainings";
import { Hobbies } from "./features/Hobbies";
import { getVerifyCaptcha } from "./api/getVerifyCaptcha";
import Footer from "./components/Footer/Footer";
import LangSwitcher from "./components/LangSwitcher/LangSwitcher";
import i18next from "i18next";
import { I18nextProvider } from "react-i18next";
import CommonFr from "./translations/fr/common.json";
import CommonEn from "./translations/en/common.json";
import DisplayWebsiteInfo from "./features/WebsiteInfo/components/DisplayWebsiteInfo/DisplayWebsiteInfo";
import SkipToContent from "./components/SkipToContent/SkipToContent";

function App() {
  const [theme, setTheme] = useState(localStorage.theme ?? "dark");
  const [lang, setLang] = useState(localStorage.lang ?? "fr");
  const [isVerified, setVerified] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  i18next.init({
    interpolation: { escapeValue: false },
    lng: lang,
    resources: {
      en: {
        common: CommonEn,
      },
      fr: {
        common: CommonFr,
      },
    },
  });

  useEffect(() => {
    if (
      theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  useEffect(() => {
    getVerifyCaptcha()
      .then((response) => {
        setVerified(response.result === true ? true : false);
      })
      .catch(() => {
        setVerified(false);
      });
  }, []);

  function onThemeSwitch(theme: string) {
    setTheme(theme);
    localStorage.theme = theme;
  }

  function onToggleMenuBurger() {
    setMobileMenuOpen(!isMobileMenuOpen);
  }

  const defaultGlobalContext: GlobalContextInterface = {
    lang: lang,
    setLang: setLang,
    isVerified: isVerified,
    setVerified: setVerified,
  };

  return (
    <GlobalContext.Provider value={defaultGlobalContext}>
      <I18nextProvider i18n={i18next}>
        <QueryClientProvider client={queryClient}>
          <div className="flex min-h-[100vh] flex-col bg-gradient-to-r from-white to-slate-100  dark:from-slate-900 dark:to-primary">
            <SkipToContent />
            <div className="container mx-auto flex-1 pt-10 lg:pt-0">
              <header className="z-1 fixed top-0 left-0 flex w-full justify-end gap-4 rounded-b-lg bg-dark bg-opacity-50 py-5 px-4 lg:static lg:rounded-none lg:bg-transparent lg:py-8 lg:px-0">
                <DisplayWebsiteInfo />
                <ThemeSwitcher
                  currentTheme={theme}
                  onThemeSwitch={onThemeSwitch}
                />
                <LangSwitcher />
                <MenuBurger
                  isOpen={isMobileMenuOpen}
                  onToggle={onToggleMenuBurger}
                />
              </header>
              <div className="grid-cols-12 pt-8 md:grid md:gap-8 md:pt-16">
                <aside className="col-span-5 hidden md:block xl:col-span-4 2xl:col-span-3">
                  <Profile />
                </aside>
                <div className="col-span-7 xl:col-span-8 2xl:col-span-9">
                  <BrowserRouter>
                    <Navigation
                      isMobileMenuOpen={isMobileMenuOpen}
                      onItemSelect={onToggleMenuBurger}
                    />
                    <main id="main-content">
                      <Routes>
                        <Route path="/" element={<About />} />
                        <Route path="/experiences" element={<Experiences />} />
                        <Route path="/competences" element={<Skills />} />
                        <Route path="/formations" element={<Trainings />} />
                        <Route path="/loisirs" element={<Hobbies />} />
                      </Routes>
                    </main>
                  </BrowserRouter>
                </div>
              </div>
            </div>
            <Footer />
          </div>
        </QueryClientProvider>
      </I18nextProvider>
    </GlobalContext.Provider>
  );
}

export default App;
