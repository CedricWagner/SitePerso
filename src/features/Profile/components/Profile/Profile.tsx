import React, { FC, useContext, useEffect } from "react";
import ProfileCard from "../ProfileCard/ProfileCard";
import ProfilePicture from "../../assets/images/profile-picture.jpg";
import ProfilePictureWebp from "../../assets/images/profile-picture.webp";
import { GlobalContext } from "@/utils/contexts/Global";
import { useProfileInformation } from "../../api/getProfileInformation";
import PanelWaiting from "@/components/PanelWaiting/PanelWaiting";
import PanelUnderConstruction from "@/components/PanelUnderConstruction/PanelUnderConstruction";

interface ProfileProps {}

export const Profile: FC<ProfileProps> = () => {
  const globalContext = useContext(GlobalContext);

  const query = useProfileInformation({
    lang: localStorage.lang,
    isVerified: globalContext ? globalContext.isVerified : false,
  });

  if (query.isLoading) {
    return <PanelWaiting />;
  }

  if (!query?.data || query?.data?.length === 0)
    return <PanelUnderConstruction />;

  return (
    <ProfileCard
      info={query.data}
      image={ProfilePicture}
      imageWebp={ProfilePictureWebp}
    />
  );
};
