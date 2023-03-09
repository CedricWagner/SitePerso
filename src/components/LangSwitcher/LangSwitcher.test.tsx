import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import LangSwitcher from "./LangSwitcher";

describe("<LangSwitcher />", () => {
  test("it should mount", () => {
    render(<LangSwitcher currentLang="fr" />);

    const langSwitcher = screen.getByRole("button");

    expect(langSwitcher).toBeInTheDocument();
  });

  test("it should have the correct title", () => {
    render(<LangSwitcher currentLang="fr" />);

    const langSwitcher = screen.getByRole("button");

    expect(langSwitcher).toHaveAttribute("title", "English version");
  });
});
