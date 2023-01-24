import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { SkillGroup } from "./SkillGroup";

describe("<SkillGroup />", () => {
  test("it should mount", () => {
    render(<SkillGroup />);

    const skillGroup = screen.getByTestId("SkillGroup");

    expect(skillGroup).toBeInTheDocument();
  });
});
