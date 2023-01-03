import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import TextBadge from "./TextBadge";

describe("<TextBadge />", () => {
  test("it should display its children", () => {
    render(<TextBadge>Dummy text...</TextBadge>);

    const textBadge = screen.getByTestId("TextBadge");

    expect(textBadge).toHaveTextContent("Dummy text...");
  });
  test("it should have the additionnal classes", () => {
    render(
      <TextBadge classNames={["center", "white"]}>Dummy text...</TextBadge>
    );

    const textBadge = screen.getByTestId("TextBadge");

    expect(textBadge).toHaveClass("center");
    expect(textBadge).toHaveClass("white");
  });
});
