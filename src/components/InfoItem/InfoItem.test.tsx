import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import InfoItem from "./InfoItem";
import PhoneIcon from "@heroicons/react/24/solid/PhoneIcon";

describe("<InfoItem />", () => {
  test("it should mount", () => {
    render(<InfoItem label="Phone" picto={<PhoneIcon />} value="06123123" />);

    const infoItem = screen.getByTestId("InfoItem");

    expect(infoItem).toBeInTheDocument();
  });
});
