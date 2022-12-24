import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import NavigationItem from "./NavigationItem";
import UserIcon from "@heroicons/react/24/solid/UserIcon";
import { BrowserRouter } from "react-router-dom";

describe("<NavigationItem />", () => {
  test("it should mount", () => {
    render(
      <BrowserRouter>
        <NavigationItem href="/" picto={<UserIcon />} title="Home" />
      </BrowserRouter>
    );

    const navigationItem = screen.getByTestId("NavigationItem");

    expect(navigationItem).toBeInTheDocument();
  });
});
