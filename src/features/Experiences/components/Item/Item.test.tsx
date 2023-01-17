import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Item as ExperienceItem } from "./Item";

describe("<ExperienceItem />", () => {
  test("it should mount", () => {
    render(
      <ExperienceItem
        description="desc"
        duration="duration"
        organization="org"
        role="role"
        startDate={new Date()}
        type="type"
      />
    );

    const experienceItem = screen.getByTestId("ExperienceItem");

    expect(experienceItem).toBeInTheDocument();
  });
});
