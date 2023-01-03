import { FC } from "react";
import InnerPanel from "../../wrappers/InnerPanel/InnerPanel";
import Panel from "../../wrappers/Panel/Panel";
import InfoItem from "../InfoItem/InfoItem";
import InfoItemsList from "../InfoItemsList/InfoItemsList";
import TextBadge from "../TextBadge/TextBadge";
import PhoneIcon from "@heroicons/react/24/solid/PhoneIcon";
import AtSymbolIcon from "@heroicons/react/24/solid/AtSymbolIcon";
import HomeIcon from "@heroicons/react/24/solid/HomeIcon";
import CalendarIcon from "@heroicons/react/24/solid/CalendarIcon";
import Imgix from "react-imgix";

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
}) => {
  const pictureClassNames = ["w-[100%]"];

  return (
    <div data-testid="ProfileCard">
      <Panel>
        <div className="m-auto mb-5 w-[250px] max-w-full overflow-hidden rounded-lg md:mt-[-100px]">
          {!image.includes("https") && (
            <img
              src={image}
              alt="Photo Cédric Wagner"
              className={pictureClassNames.join(" ")}
            />
          )}
          {image.includes("https") && (
            <Imgix
              src={image}
              width={430}
              className={pictureClassNames.join(" ")}
            />
          )}
        </div>
        <h1 className="mb-2 text-center text-2xl font-bold">{name}</h1>
        <div className="mb-8 text-center">
          <TextBadge>{role}</TextBadge>
        </div>
        <InnerPanel>
          <InfoItemsList
            items={[
              <InfoItem
                picto={<PhoneIcon />}
                label="Téléphone"
                value={phone}
              />,
              <InfoItem picto={<AtSymbolIcon />} label="Email" value={email} />,
              <InfoItem
                picto={<HomeIcon />}
                label="Localisation"
                value={location}
              />,
              <InfoItem
                picto={<CalendarIcon />}
                label="Date de naissance"
                value={birthday}
              />,
            ]}
          />
        </InnerPanel>
      </Panel>
    </div>
  );
};

export default ProfileCard;
