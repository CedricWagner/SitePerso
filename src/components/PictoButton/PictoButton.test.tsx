import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import PictoButton from "./PictoButton";
import CheckCircleIcon from "@heroicons/react/24/solid/CheckCircleIcon";

describe("<PictoButton />", () => {
  test("it should mount", () => {
    render(<PictoButton href="/" picto={<CheckCircleIcon />} title="Title" />);

    const pictoButton = screen.getByTestId("PictoButton");

    expect(pictoButton).toBeInTheDocument();
  });
});
