import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import StarRating from "./StarRating";

describe("<StarRating />", () => {
  test("it should mount", () => {
    render(<StarRating value={3} />);

    const starRating = screen.getByTestId("StarRating");

    expect(starRating).toBeInTheDocument();
  });

  test("it should display the correct text", () => {
    render(<StarRating value={5} />);

    const starRating = screen.getByTestId("StarRating");

    expect(starRating).toHaveTextContent("2.5 étoile(s) sur 5");
  });
});
