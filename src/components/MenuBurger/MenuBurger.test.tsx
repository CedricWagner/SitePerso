import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import MenuBurger from "./MenuBurger";
import { vi } from "vitest";
import { I18nextWrapper } from "@/mock/mockI18next";

describe("<MenuBurger />", () => {
  test("it should mount", () => {
    render(
      <I18nextWrapper>
        <MenuBurger isOpen={true} onToggle={vi.fn()} />
      </I18nextWrapper>
    );

    const menuBurger = screen.getByRole("button");

    expect(menuBurger).toBeInTheDocument();
  });

  test("it should toggle the open state", () => {
    let isOpen = false;
    const toggle = () => {
      isOpen = !isOpen;
    };

    render(
      <I18nextWrapper>
        <MenuBurger isOpen={isOpen} onToggle={toggle} />
      </I18nextWrapper>
    );

    const menuBurger = screen.getByRole("button");

    fireEvent.click(menuBurger);

    expect(isOpen).toBe(true);
  });
});
