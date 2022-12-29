import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import ThemeSwitcher from "./components/ThemeSwitcher/ThemeSwitcher";
import About from "./pages/About/About";
import Panel from "./wrappers/Panel/Panel";

function App() {
  const [theme, setTheme] = useState(localStorage.theme ?? "dark");

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

  return (
    <div className="min-h-[100vh] bg-gradient-to-r from-white to-slate-100  dark:from-slate-900 dark:to-primary">
      <div className="container mx-auto">
        <div className="flex justify-end space-x-4 py-8">
          <ThemeSwitcher currentTheme={theme} onThemeSwitch={onThemeSwitch} />
        </div>
        <div className="grid-cols-3 md:grid md:gap-8">
          <div className="col-span-1">
            <ProfileCard
              name="Cédric Wagner"
              phone="06 82 28 63 65"
              email="cedricwagner@free.fr"
              birthday="14/08/1990"
              github="https://github.com/CedricWagner"
              image=""
              linkedin="https://www.linkedin.com/in/c%C3%A9dric-wagner-573ab8129/"
              location="Strasbourg"
              role="Développeur Web / Fullstack"
            />
          </div>
          <div className="col-span-2">
            <BrowserRouter>
              <Navigation />
              <Panel>
                <Routes>
                  <Route path="/" element={<About />} />
                </Routes>
              </Panel>
            </BrowserRouter>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
