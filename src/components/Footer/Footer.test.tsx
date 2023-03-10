import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Footer from "./Footer";
import { I18nextWrapper } from "@/mock/mockI18next";

describe("<Footer />", () => {
  test("it should mount", () => {
    render(
      <I18nextWrapper>
        <Footer />
      </I18nextWrapper>
    );

    const footer = screen.getByTestId("Footer");

    expect(footer).toBeInTheDocument();
  });
  test("it should display the correct text", () => {
    render(
      <I18nextWrapper>
        <Footer />
      </I18nextWrapper>
    );

    const footer = screen.getByTestId("Footer");

    expect(footer).toHaveTextContent("Cédric Wagner");
  });
});
