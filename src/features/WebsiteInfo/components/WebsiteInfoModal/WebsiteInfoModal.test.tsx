import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import WebsiteInfoModal from "./WebsiteInfoModal";
import { I18nextWrapper } from "@/mock/mockI18next";
import { vi } from "vitest";

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
});
