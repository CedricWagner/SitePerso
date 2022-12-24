import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Navigation from "./Navigation";
import { BrowserRouter } from "react-router-dom";

describe("<Navigation />", () => {
  test("it should mount", () => {
    render(
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
    );

    const navigation = screen.getByTestId("Navigation");

    expect(navigation).toBeInTheDocument();
  });
});
