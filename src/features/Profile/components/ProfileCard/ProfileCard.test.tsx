import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ProfileCard from "./ProfileCard";
import ProfilePicture from "../../assets/images/profile-picture.jpg";

describe("<ProfileCard />", () => {
  test("it should mount", () => {
    render(
      <ProfileCard
        image={ProfilePicture}
        info={[
          { slug: "name", value: "Cédric Wagner", private: false },
          { slug: "birthday", value: "14/08/1990", private: true },
        ]}
      />
    );

    const profileCard = screen.getByTestId("ProfileCard");

    expect(profileCard).toBeInTheDocument();
  });
});
