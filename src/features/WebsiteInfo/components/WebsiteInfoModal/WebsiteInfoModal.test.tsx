import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import WebsiteInfoModal from "./WebsiteInfoModal";
import { I18nextWrapper } from "@/mock/mockI18next";
import { vi } from "vitest";
import { WebsiteCarbonBadge } from "react-websitecarbon-badge";

vi.mock("focus-trap", async (importOriginal) => {
  const mod = await importOriginal();
  return {
    ...(mod as object),
    createFocusTrap: () => {
      return {
        activate: () => {},
        deactivate: () => {},
      };
    },
  };
});

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

  test("it should display the carbon badge", () => {
    render(
      <I18nextWrapper>
        <WebsiteInfoModal onClose={() => {}} />
      </I18nextWrapper>
    );

    const badgeContent = screen.getByText(/Page web plus légère que/i);

    expect(badgeContent).toBeInTheDocument();
  });

  test("the carbon badge should also display in english", () => {
    render(
      <WebsiteCarbonBadge dark={false} lang={"en"} url="cedric-wagner.fr" co2="0.04" percentage="96"/>
    );

    const badgeContent = screen.getByText(/Cleaner than /i);

    expect(badgeContent).toBeInTheDocument();
  });
});
