import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import CaptchaModal from "./CaptchaModal";

describe("<CaptchaModal />", () => {
  test("it should mount", () => {
    render(<CaptchaModal />);

    const modal = screen.getByTestId("Modal");

    expect(modal).toBeInTheDocument();
  });
});
