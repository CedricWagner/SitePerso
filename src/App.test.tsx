import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";

describe("<ProfileCardBlock />", () => {
  test("it should display the title", () => {
    render(<App />);

    const title = screen.getAllByText("Cédric Wagner");

    expect(title.length).toBeGreaterThanOrEqual(1);
  });
});
