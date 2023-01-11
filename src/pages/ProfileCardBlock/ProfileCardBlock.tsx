import React, { FC } from "react";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import ProfilePicture from "../../assets/images/profile-picture.jpg";

interface ProfileCardBlockProps {}

const ProfileCardBlock: FC<ProfileCardBlockProps> = () => (
  <ProfileCard
    name="Cédric Wagner"
    phone={import.meta.env.VITE_PROFILE_PHONE}
    email={import.meta.env.VITE_PROFILE_EMAIL}
    birthday="14/08/1990"
    github="https://github.com/CedricWagner"
    image={ProfilePicture}
    linkedin="https://www.linkedin.com/in/c%C3%A9dric-wagner-573ab8129/"
    location="Strasbourg"
    role="Développeur Web / Fullstack"
  />
);

export default ProfileCardBlock;
