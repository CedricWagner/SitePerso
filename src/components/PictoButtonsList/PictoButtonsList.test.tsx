import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import PictoButtonsList from "./PictoButtonsList";
import PictoButton from "../PictoButton/PictoButton";
import { FaBeer } from "react-icons/fa";

describe("<PictoButtonsList />", () => {
  test("it should display all items", () => {
    render(
      <PictoButtonsList
        items={[
          <PictoButton
            href="https://test.com"
            title="Test"
            picto={<FaBeer size={"100%"} />}
            twTextClass="text-blue-400"
            twHoverBgClass="hover:bg-blue-400 dark:hover:bg-blue-400"
          />,
          <PictoButton
            href="https://test.com"
            title="Test"
            picto={<FaBeer />}
            twHoverBgClass="hover:bg-blue-400 dark:hover:bg-blue-400"
          />,
          <PictoButton
            href="https://test.com"
            title="Test"
            picto={<FaBeer />}
          />,
        ]}
      />
    );

    const pictoButtonsList = screen.getAllByTestId("PictoButton");

    expect(pictoButtonsList.length).toBe(3);
  });
});
