import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
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
            <Panel>--Profile card--</Panel>
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
