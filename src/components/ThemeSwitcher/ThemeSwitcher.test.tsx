import React, { Suspense } from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ThemeSwitcher from "./ThemeSwitcher";
import { vi } from "vitest";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import { I18NEXT_CONFIG } from "@/config";

i18next.init(I18NEXT_CONFIG);

describe("<ThemeSwitcher />", () => {
  test("it should mount", () => {
    render(
      <I18nextProvider i18n={i18next}>
        <Suspense fallback="loading">
          <ThemeSwitcher currentTheme="dark" onThemeSwitch={vi.fn()} />
        </Suspense>
      </I18nextProvider>
    );

    const themeSwitcher = screen.getByRole("button");

    expect(themeSwitcher).toBeInTheDocument();
  });

  test("it should toggle value on click", () => {
    let theme = "dark";
    const mockThemeSwitch = (newTheme: string) => {
      theme = newTheme;
    };

    render(
      <I18nextProvider i18n={i18next}>
        <Suspense fallback="loading">
          <ThemeSwitcher currentTheme={theme} onThemeSwitch={mockThemeSwitch} />
        </Suspense>
      </I18nextProvider>
    );

    const themeSwitcher = screen.getByRole("button");
    fireEvent.click(themeSwitcher);

    expect(theme).toBe("light");
  });
});
