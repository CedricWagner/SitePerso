import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import InfoItemsList from "./InfoItemsList";

describe("<InfoItemsList />", () => {
  test("it should mount", () => {
    render(<InfoItemsList items={[]} />);

    const infoItemsList = screen.getByTestId("InfoItemsList");

    expect(infoItemsList).toBeInTheDocument();
  });
});
