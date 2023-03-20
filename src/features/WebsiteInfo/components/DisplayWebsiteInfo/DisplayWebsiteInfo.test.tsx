import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import DisplayWebsiteInfo from "./DisplayWebsiteInfo";
import { I18nextWrapper } from "@/mock/mockI18next";

describe("<DisplayWebsiteInfo />", () => {
  test("it should mount", () => {
    render(
      <I18nextWrapper>
        <DisplayWebsiteInfo />
      </I18nextWrapper>
    );

    const displayWebsiteInfo = screen.getByTestId("HeroButton");

    expect(displayWebsiteInfo).toBeInTheDocument();
  });
});
