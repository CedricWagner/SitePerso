import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Item from "./Item";
import { I18nextWrapper } from "@/mock/mockI18next";

describe("<Item />", () => {
  test("it should mount", () => {
    render(
      <I18nextWrapper>
        <Item name="Skill item" details="details" rating={8} />
      </I18nextWrapper>
    );

    const item = screen.getByTestId("SkillItem");

    expect(item).toBeInTheDocument();
  });
});
