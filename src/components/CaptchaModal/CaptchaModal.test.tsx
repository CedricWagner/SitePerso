import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import CaptchaModal from "./CaptchaModal";
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

describe("<CaptchaModal />", () => {
  test("it should mount", () => {
    render(
      <I18nextWrapper>
        <CaptchaModal onClose={() => {}} />
      </I18nextWrapper>
    );

    const captchaModal = screen.getByTestId("CaptchaModal");

    expect(captchaModal).toBeInTheDocument();
  });
});
