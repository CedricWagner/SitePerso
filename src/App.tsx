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

function App() {
  const [theme, setTheme] = useState(localStorage.theme ?? "dark");
  const [isVerified, setVerified] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  function onThemeSwitch(theme: string) {
    setTheme(theme);
    localStorage.theme = theme;
  }

  function onToggleMenuBurger() {
    setMobileMenuOpen(!isMobileMenuOpen);
  }

  const defaultGlobalContext: GlobalContextInterface = {
    lang: "fr",
    isVerified: isVerified,
    setVerified: setVerified,
  };

  return (
    <GlobalContext.Provider value={defaultGlobalContext}>
      <QueryClientProvider client={queryClient}>
        <div className="min-h-[100vh] bg-gradient-to-r from-white to-slate-100  dark:from-slate-900 dark:to-primary">
          <div className="container mx-auto pt-10 lg:pt-0">
            <div className="z-1 fixed top-0 left-0 flex w-full justify-end gap-4 rounded-b-lg bg-dark bg-opacity-50 py-5 px-4 lg:static lg:rounded-none lg:bg-transparent lg:py-8 lg:px-0">
              <ThemeSwitcher
                currentTheme={theme}
                onThemeSwitch={onThemeSwitch}
              />
              <MenuBurger
                isOpen={isMobileMenuOpen}
                onToggle={onToggleMenuBurger}
              />
            </div>
            <div className="grid-cols-12 pt-8 md:grid md:gap-8 md:pt-16">
              <div className="col-span-5 hidden md:block xl:col-span-4 2xl:col-span-3">
                <Profile />
              </div>
              <div className="col-span-7 xl:col-span-8 2xl:col-span-9">
                <BrowserRouter>
                  <Navigation isMobileMenuOpen={isMobileMenuOpen} />
                  <Routes>
                    <Route path="/" element={<About />} />
                    <Route path="/experiences" element={<Experiences />} />
                  </Routes>
                </BrowserRouter>
              </div>
            </div>
          </div>
        </div>
      </QueryClientProvider>
    </GlobalContext.Provider>
  );
}

export default App;
