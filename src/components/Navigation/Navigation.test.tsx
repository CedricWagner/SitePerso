import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Navigation from "./Navigation";
import { BrowserRouter } from "react-router-dom";
import { vi } from "vitest";
import { I18nextWrapper } from "@/mock/mockI18next";

describe("<Navigation />", () => {
  test("it should mount", () => {
    render(
      <I18nextWrapper>
        <BrowserRouter>
          <Navigation onItemSelect={() => {}} />
        </BrowserRouter>
      </I18nextWrapper>
    );

    const navigation = screen.getByTestId("Navigation");

    expect(navigation).toBeInTheDocument();
  });

  test("it should trigger onItemSelect", () => {
    const onItemSelect = vi.fn().mockImplementation(() => {});

    render(
      <I18nextWrapper>
        <BrowserRouter>
          <Navigation onItemSelect={onItemSelect} />
        </BrowserRouter>
      </I18nextWrapper>
    );

    const navigationItems = screen.getAllByTestId("NavigationItem");

    fireEvent.click(navigationItems[0]);

    expect(onItemSelect).toHaveBeenCalled();
  });
});
