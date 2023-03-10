import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import CaptchaModal from "./CaptchaModal";
import { I18nextWrapper } from "@/mock/mockI18next";

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
