import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import UnderContruction from "./UnderContruction";
import { I18nextWrapper } from "@/mock/mockI18next";

describe("<UnderContruction />", () => {
  test("it should mount", () => {
    render(
      <I18nextWrapper>
        <UnderContruction />
      </I18nextWrapper>
    );

    const underContruction = screen.getByTestId("UnderContruction");

    expect(underContruction).toBeInTheDocument();
  });
});
