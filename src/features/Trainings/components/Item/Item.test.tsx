import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Item from "./Item";

describe("<Item />", () => {
  test("it should mount", () => {
    render(
      <Item
        date="November 2016"
        description="Training description"
        location="Strasbourg"
        name="My training"
        qualification="Master"
        startDate={new Date()}
      />
    );

    const item = screen.getByTestId("TrainingItem");

    expect(item).toBeInTheDocument();
  });
});
