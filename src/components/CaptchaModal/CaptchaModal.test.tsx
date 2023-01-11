import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import CaptchaModal from "./CaptchaModal";

describe("<CaptchaModal />", () => {
  test("it should mount", () => {
    render(<CaptchaModal onClose={() => {}} />);

    const captchaModal = screen.getByTestId("CaptchaModal");

    expect(captchaModal).toBeInTheDocument();
  });
});
