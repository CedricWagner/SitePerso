import { FC } from "react";
import InnerPanel from "@/wrappers/InnerPanel/InnerPanel";
import Panel from "@/wrappers/Panel/Panel";
import InfoItem from "@/components/InfoItem/InfoItem";
import InfoItemsList from "@/components/InfoItemsList/InfoItemsList";
import TextBadge from "@/components/TextBadge/TextBadge";
import PhoneIcon from "@heroicons/react/24/solid/PhoneIcon";
import AtSymbolIcon from "@heroicons/react/24/solid/AtSymbolIcon";
import HomeIcon from "@heroicons/react/24/solid/HomeIcon";
import CalendarIcon from "@heroicons/react/24/solid/CalendarIcon";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Imgix from "react-imgix";
import PictoButtonsList from "@/components/PictoButtonsList/PictoButtonsList";
import PictoButton from "@/components/PictoButton/PictoButton";

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
        <div className="mb-4 text-center">
          <TextBadge>{role}</TextBadge>
        </div>
        <div className="mb-4">
          <PictoButtonsList
            items={[
              <PictoButton
                href={github}
                title="Github"
                picto={<FaGithub size={"100%"} />}
                twTextClass="text-secondary"
                twHoverBgClass="hover:bg-secondary dark:hover:bg-secondary"
              />,
              <PictoButton
                href={linkedin}
                title="LinkedIn"
                picto={<FaLinkedinIn size={"100%"} />}
                twTextClass="text-blue-400"
                twHoverBgClass="hover:bg-blue-400 dark:hover:bg-blue-400"
              />,
            ]}
          />
        </div>
        <InnerPanel>
          <InfoItemsList
            items={[
              <InfoItem
                picto={<PhoneIcon />}
                label="Téléphone"
                value={phone}
                mustVerify={true}
                specificType="phone"
              />,
              <InfoItem
                picto={<AtSymbolIcon />}
                label="Email"
                value={email}
                mustVerify={true}
                specificType="email"
              />,
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
