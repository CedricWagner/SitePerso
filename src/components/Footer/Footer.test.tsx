import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Footer from "./Footer";

describe("<Footer />", () => {
  test("it should mount", () => {
    render(<Footer></Footer>);

    const footer = screen.getByTestId("Footer");

    expect(footer).toBeInTheDocument();
  });
  test("it should display the correct text", () => {
    render(<Footer>Footer content</Footer>);

    const footer = screen.getByTestId("Footer");

    expect(footer).toHaveTextContent("Footer content");
  });
});
