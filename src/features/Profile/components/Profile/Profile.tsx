import React, { FC, useContext, useEffect } from "react";
import ProfileCard from "../ProfileCard/ProfileCard";
import ProfilePicture from "../../assets/images/profile-picture.jpg";
import {
  getLangFromGlobalContext,
  GlobalContext,
} from "@/utils/contexts/Global";
import { useProfileInformation } from "../../api/getProfileInformation";
import PanelWaiting from "@/components/PanelWaiting/PanelWaiting";
import PanelUnderConstruction from "@/components/PanelUnderConstruction/PanelUnderConstruction";

interface ProfileProps {}

export const Profile: FC<ProfileProps> = () => {
  const globalContext = useContext(GlobalContext);

  const query = useProfileInformation({
    lang: getLangFromGlobalContext(globalContext),
    isVerified: globalContext ? globalContext.isVerified : false,
  });

  if (query.isLoading) {
    return <PanelWaiting />;
  }

  if (!query?.data || query?.data?.length === 0)
    return <PanelUnderConstruction />;

  return <ProfileCard info={query.data} image={ProfilePicture} />;
};
