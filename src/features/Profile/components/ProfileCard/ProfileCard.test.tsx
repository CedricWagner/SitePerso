import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ProfileCard from "./ProfileCard";
import ProfilePicture from "../../assets/images/profile-picture.jpg";

describe("<ProfileCard />", () => {
  test("it should mount", () => {
    render(
      <ProfileCard
        name="Cédric Wagner"
        phone="06 82 28 63 65"
        email="cedricwagner@free.fr"
        birthday="14/08/1990"
        github="https://github.com/CedricWagner"
        image={ProfilePicture}
        linkedin="https://www.linkedin.com/in/c%C3%A9dric-wagner-573ab8129/"
        location="Strasbourg"
        role="Développeur Web / Fullstack"
      />
    );

    const profileCard = screen.getByTestId("ProfileCard");

    expect(profileCard).toBeInTheDocument();
  });
});
