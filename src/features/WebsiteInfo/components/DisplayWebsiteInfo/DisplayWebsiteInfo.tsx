import HeroButton from "@/wrappers/HeroButton/HeroButton";
import React, { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import QuestionMarkCircleIcon from "@heroicons/react/24/outline/QuestionMarkCircleIcon";
import CaptchaModal from "@/components/CaptchaModal/CaptchaModal";
import WebsiteInfoModal from "../WebsiteInfoModal/WebsiteInfoModal";

interface DisplayWebsiteInfoProps {}

const DisplayWebsiteInfo: FC<DisplayWebsiteInfoProps> = () => {
  const [displayModal, setDisplayModal] = useState(false);
  const { t } = useTranslation("common");

  function displayWebsiteInfoModal() {
    setDisplayModal(true);
  }

  return (
    <>
      {displayModal && (
        <WebsiteInfoModal onClose={() => setDisplayModal(false)} />
      )}
      <HeroButton
        classes={["rounded-full", "h-8", "w-8"]}
        onClick={displayWebsiteInfoModal}
        title={t("website_info.button")}
      >
        <QuestionMarkCircleIcon />
      </HeroButton>
    </>
  );
};

export default DisplayWebsiteInfo;
