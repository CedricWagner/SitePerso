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
import { ProfileInformation } from "../../types";
import { findAllBySlugs, findOneBySlug, findValueBySlug } from "../../utils";
import { useTranslation } from "react-i18next";

interface ProfileCardProps {
  info: ProfileInformation[];
  image: string;
  imageWebp?: string | null;
}

const ProfileCard: FC<ProfileCardProps> = ({
  info,
  image,
  imageWebp = null,
}) => {
  const pictureClassNames = ["w-[100%]"];
  const { t, i18n } = useTranslation("common");

  return (
    <div data-testid="ProfileCard">
      <Panel>
        <div className="m-auto mb-5 w-[250px] max-w-full overflow-hidden rounded-lg md:mt-[-100px]">
          {!image.includes("https") && (
            <picture>
              {imageWebp !== null && <source srcSet={imageWebp} />}
              <source srcSet={image} />
              <img
                src={image}
                alt={`Photo ${findValueBySlug(info, "name")}`}
                className={pictureClassNames.join(" ")}
              />
            </picture>
          )}
        </div>
        <h2 className="mb-2 text-center text-2xl font-bold">
          {findValueBySlug(info, "name")}
        </h2>
        <div className="mb-4 text-center">
          <TextBadge>{findOneBySlug(info, "role")?.value}</TextBadge>
        </div>
        <div className="mb-4">
          <PictoButtonsList
            items={findAllBySlugs(info, ["github", "linkedin"]).map((item) => {
              switch (item.slug) {
                case "github":
                  return (
                    <PictoButton
                      href={item.value}
                      title="Github"
                      picto={<FaGithub size={"100%"} />}
                      twTextClass="text-secondary"
                      twHoverBgClass="hover:bg-secondary dark:hover:bg-secondary"
                    />
                  );
                case "linkedin":
                  return (
                    <PictoButton
                      href={item.value}
                      title="LinkedIn"
                      picto={<FaLinkedinIn size={"100%"} />}
                      twTextClass="text-blue-400"
                      twHoverBgClass="hover:bg-blue-400 dark:hover:bg-blue-400"
                    />
                  );
              }
            })}
          />
        </div>
        <InnerPanel>
          <InfoItemsList
            items={findAllBySlugs(info, [
              "phone",
              "email",
              "location",
              "birthday",
            ]).map((item) => {
              switch (item.slug) {
                case "phone":
                  return (
                    <InfoItem
                      picto={<PhoneIcon />}
                      label={t("profile.phone")}
                      value={item.value}
                      mustVerify={item.private}
                      specificType="phone"
                    />
                  );
                case "email":
                  return (
                    <InfoItem
                      picto={<AtSymbolIcon />}
                      label={t("profile.email")}
                      value={item.value}
                      mustVerify={item.private}
                      specificType="email"
                    />
                  );
                case "location":
                  return (
                    <InfoItem
                      picto={<HomeIcon />}
                      label={t("profile.location")}
                      value={item.value}
                      mustVerify={item.private}
                    />
                  );
                case "birthday":
                  return (
                    <InfoItem
                      picto={<CalendarIcon />}
                      label={t("profile.birthday")}
                      value={item.value}
                      mustVerify={item.private}
                    />
                  );
              }
            })}
          />
        </InnerPanel>
      </Panel>
    </div>
  );
};

export default ProfileCard;
