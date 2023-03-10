import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import PanelUnderConstruction from "./PanelUnderConstruction";
import { I18nextWrapper } from "@/mock/mockI18next";

describe("<PanelUnderConstruction />", () => {
  test("it should mount", () => {
    render(
      <I18nextWrapper>
        <PanelUnderConstruction />
      </I18nextWrapper>
    );

    const panelUnderConstruction = screen.getByTestId("PanelUnderConstruction");

    expect(panelUnderConstruction).toBeInTheDocument();
  });
});
