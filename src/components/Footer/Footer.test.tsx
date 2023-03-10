import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Footer from "./Footer";
import { I18nextProvider } from "react-i18next";
import { I18NEXT_CONFIG } from "@/config";
import i18next from "i18next";

i18next.init(I18NEXT_CONFIG);

describe("<Footer />", () => {
  test("it should mount", () => {
    render(<Footer />);

    const footer = screen.getByTestId("Footer");

    expect(footer).toBeInTheDocument();
  });
  test("it should display the correct text", () => {
    render(
      <I18nextProvider i18n={i18next}>
        <Footer />
      </I18nextProvider>
    );

    const footer = screen.getByTestId("Footer");

    expect(footer).toHaveTextContent("Cédric Wagner");
  });
});
