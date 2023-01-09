import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import InfoItem from "./InfoItem";
import PhoneIcon from "@heroicons/react/24/solid/PhoneIcon";

describe("<InfoItem />", () => {
  test("it should mount", () => {
    render(<InfoItem label="Phone" picto={<PhoneIcon />} value="06123123" />);

    const infoItem = screen.getByTestId("InfoItem");

    expect(infoItem).toBeInTheDocument();
  });

  test('it should display a link with "tel:" when displaying a phone', () => {
    render(
      <InfoItem
        label="Phone"
        picto={<PhoneIcon />}
        value="06123123"
        specificType="phone"
      />
    );

    const infoItemType = screen.getByTestId("InfoItem__type");

    expect(infoItemType.getAttribute("href")).toBe("tel:06123123");
  });

  test('it should display a link with "mailto:" when displaying an email address', () => {
    render(
      <InfoItem
        label="Email"
        picto={<PhoneIcon />}
        value="test@email.com"
        specificType="email"
      />
    );

    const infoItemType = screen.getByTestId("InfoItem__type");

    expect(infoItemType.getAttribute("href")).toBe("mailto:test@email.com");
  });

  test("it should display a cta to the modal if user is not verified", () => {
    render(
      <InfoItem
        label="Email"
        picto={<PhoneIcon />}
        value="test@email.com"
        specificType="email"
        mustVerify={true}
      />
    );

    const modalButton = screen.getByRole("button");

    expect(modalButton).toBeInTheDocument();
  });

  test("it should display the value", () => {
    render(
      <InfoItem label="Email" picto={<PhoneIcon />} value="test@email.com" />
    );

    const value = screen.getByTestId("InfoItem__value");

    expect(value.textContent).toBe("test@email.com");
  });
});
