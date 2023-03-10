import React, { Suspense } from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import LangSwitcher from "./LangSwitcher";
import { I18nextProvider, withTranslation } from "react-i18next";
export default withTranslation("ns")(LangSwitcher);
import i18next from "i18next";
import { I18NEXT_CONFIG } from "@/config";

i18next.init(I18NEXT_CONFIG);

describe("<LangSwitcher />", () => {
  test("it should mount", () => {
    render(
      <I18nextProvider i18n={i18next}>
        <Suspense fallback="loading">
          <LangSwitcher />
        </Suspense>
      </I18nextProvider>
    );

    const langSwitcher = screen.getByRole("button");

    expect(langSwitcher).toBeInTheDocument();
  });

  test("it should have the correct title", () => {
    render(
      <I18nextProvider i18n={i18next}>
        <Suspense fallback="loading">
          <LangSwitcher />
        </Suspense>
      </I18nextProvider>
    );

    const langSwitcher = screen.getByRole("button");

    expect(langSwitcher).toHaveAttribute("title", "English version");
  });
});
