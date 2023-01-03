import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import InfoItemsList from "./InfoItemsList";
import InfoItem from "../InfoItem/InfoItem";
import AcademicCapIcon from "@heroicons/react/24/solid/AcademicCapIcon";

describe("<InfoItemsList />", () => {
  test("it should display all items", () => {
    render(
      <InfoItemsList
        items={[
          <InfoItem
            picto={<AcademicCapIcon />}
            label="Item 1"
            value="Value 1"
          />,
          <InfoItem
            picto={<AcademicCapIcon />}
            label="Item 2"
            value="Value 2"
          />,
          <InfoItem
            picto={<AcademicCapIcon />}
            label="Item 3"
            value="Value 3"
          />,
        ]}
      />
    );

    const infoItemsList = screen.getAllByTestId("InfoItem");

    expect(infoItemsList.length).toBe(3);
  });
});
