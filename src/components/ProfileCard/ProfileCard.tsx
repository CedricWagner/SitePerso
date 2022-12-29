import React, { FC } from "react";
import InnerPanel from "../../wrappers/InnerPanel/InnerPanel";
import Panel from "../../wrappers/Panel/Panel";
import InfoItem from "../InfoItem/InfoItem";
import InfoItemsList from "../InfoItemsList/InfoItemsList";
import TextBadge from "../TextBadge/TextBadge";
import PhoneIcon from "@heroicons/react/24/solid/PhoneIcon";
import AtSymbolIcon from "@heroicons/react/24/solid/AtSymbolIcon";

interface ProfileCardProps {
  name: string;
  image: string;
  role: string;
  phone: string;
  email: string;
  location: string;
  birthday: string;
  github: string;
  linkedin: string;
}

const ProfileCard: FC<ProfileCardProps> = ({
  name,
  birthday,
  email,
  github,
  image,
  linkedin,
  location,
  phone,
  role,
}) => (
  <div data-testid="ProfileCard">
    <Panel>
      <h1>{name}</h1>
      <TextBadge>{role}</TextBadge>
      <InnerPanel>
        <InfoItemsList
          items={[
            <InfoItem picto={<PhoneIcon />} label="Téléphone" value={phone} />,
            <InfoItem picto={<AtSymbolIcon />} label="Email" value={email} />,
          ]}
        />
      </InnerPanel>
    </Panel>
  </div>
);

export default ProfileCard;
