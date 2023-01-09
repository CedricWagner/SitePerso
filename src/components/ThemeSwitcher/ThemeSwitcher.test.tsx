import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ThemeSwitcher from "./ThemeSwitcher";
import { vi } from "vitest";

describe("<ThemeSwitcher />", () => {
  test("it should mount", () => {
    render(<ThemeSwitcher currentTheme="dark" onThemeSwitch={vi.fn()} />);

    const themeSwitcher = screen.getByRole("button");

    expect(themeSwitcher).toBeInTheDocument();
  });

  test("it should toggle value on click", () => {
    let theme = "dark";
    const mockThemeSwitch = (newTheme: string) => {
      theme = newTheme;
    };

    render(
      <ThemeSwitcher currentTheme={theme} onThemeSwitch={mockThemeSwitch} />
    );

    const themeSwitcher = screen.getByRole("button");
    fireEvent.click(themeSwitcher);

    expect(theme).toBe("light");
  });
});
