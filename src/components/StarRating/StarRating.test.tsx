import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import StarRating from "./StarRating";
import { I18nextWrapper } from "@/mock/mockI18next";

describe("<StarRating />", () => {
  test("it should mount", () => {
    render(
      <I18nextWrapper>
        <StarRating value={3} />
      </I18nextWrapper>
    );

    const starRating = screen.getByTestId("StarRating");

    expect(starRating).toBeInTheDocument();
  });

  test("it should display the correct text", () => {
    render(
      <I18nextWrapper>
        <StarRating value={5} />
      </I18nextWrapper>
    );

    const starRating = screen.getByTestId("StarRating");

    expect(starRating).toHaveTextContent("2.5 étoile(s) sur 5");
  });
});
