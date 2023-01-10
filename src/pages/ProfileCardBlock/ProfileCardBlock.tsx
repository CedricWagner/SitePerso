import React, { FC } from "react";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import ProfilePicture from "../../assets/images/profile-picture.jpg";

interface ProfileCardBlockProps {}

const ProfileCardBlock: FC<ProfileCardBlockProps> = () => (
  <ProfileCard
    name="Cédric Wagner"
    phone="06 12 31 12 31"
    email="cedricwagner@fake.mail"
    birthday="14/08/1990"
    github="https://github.com/CedricWagner"
    image={ProfilePicture}
    linkedin="https://www.linkedin.com/in/c%C3%A9dric-wagner-573ab8129/"
    location="Strasbourg"
    role="Développeur Web / Fullstack"
  />
);

export default ProfileCardBlock;
