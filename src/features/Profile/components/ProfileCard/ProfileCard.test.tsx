import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ProfileCard from "./ProfileCard";
import ProfilePicture from "../../assets/images/profile-picture.jpg";
import { I18nextWrapper } from "@/mock/mockI18next";

describe("<ProfileCard />", () => {
  test("it should mount", () => {
    render(
      <I18nextWrapper>
        <ProfileCard
          image={ProfilePicture}
          info={[
            { slug: "name", value: "Cédric Wagner", private: false },
            { slug: "birthday", value: "14/08/1990", private: true },
          ]}
        />
      </I18nextWrapper>
    );

    const profileCard = screen.getByTestId("ProfileCard");

    expect(profileCard).toBeInTheDocument();
  });
});
