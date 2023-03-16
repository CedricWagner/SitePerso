import Modal from "@/components/Modal/Modal";
import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import LinkIcon from "@heroicons/react/24/outline/LinkIcon";

interface WebsiteInfoModalProps {
  onClose: () => void;
}

const WebsiteInfoModal: FC<WebsiteInfoModalProps> = ({ onClose }) => {
  const { t } = useTranslation("common");
  const titleClasses = "text-xl font-bold";
  const linkClasses = "underline text-primary";

  return (
    <div data-testid="CaptchaModal">
      <Modal display={true} title={t("website_info.title")} onClose={onClose}>
        <h2 className={titleClasses}>{t("website_info.front.title")}</h2>
        <p className="mb-4">
          {t("website_info.front.technologies")}
          <br />
          <a
            href="https://github.com/CedricWagner/SitePerso"
            target={"_blank"}
            className={linkClasses}
          >
            <span className="mr-1 inline-block h-4 w-4">
              <LinkIcon />
            </span>
            {t("website_info.source_code")}
          </a>
        </p>
        <h2 className={titleClasses}>{t("website_info.back.title")}</h2>
        <p className="mb-4">
          {t("website_info.back.technologies")}
          <br />
          <a
            href="https://github.com/CedricWagner/SitePerso-Back"
            target={"_blank"}
            className={linkClasses}
          >
            <span className="mr-1 inline-block h-4 w-4">
              <LinkIcon />
            </span>
            {t("website_info.source_code")}
          </a>
        </p>
        <h2 className={titleClasses}>{t("website_info.server.title")}</h2>
        <p>{t("website_info.server.technologies")}</p>
      </Modal>
    </div>
  );
};

export default WebsiteInfoModal;
