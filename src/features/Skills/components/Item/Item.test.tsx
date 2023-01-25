import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Item from "./Item";

describe("<Item />", () => {
  test("it should mount", () => {
    render(<Item name="Skill item" details="details" rating={8} />);

    const item = screen.getByTestId("SkillItem");

    expect(item).toBeInTheDocument();
  });
});
