import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import WebsiteInfoModal from "./WebsiteInfoModal";
import { I18nextWrapper } from "@/mock/mockI18next";

describe("<WebsiteInfoModal />", () => {
  test("it should mount", () => {
    render(
      <I18nextWrapper>
        <WebsiteInfoModal onClose={() => {}} />
      </I18nextWrapper>
    );

    const websiteInfoModal = screen.getByTestId("WebsiteInfoModal");

    expect(websiteInfoModal).toBeInTheDocument();
  });
});
