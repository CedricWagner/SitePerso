import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Profile } from "./Profile";

describe("<ProfileCardBlock />", () => {
  test("it should mount", () => {
    render(<Profile />);

    const profileCardBlock = screen.getByTestId("ProfileCard");

    expect(profileCardBlock).toBeInTheDocument();
  });
});
