import Modal from "@/components/Modal/Modal";
import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import LinkIcon from "@heroicons/react/24/outline/LinkIcon";
import { WebsiteCarbonBadge } from "react-websitecarbon-badge";

interface WebsiteInfoModalProps {
  onClose: () => void;
}

const WebsiteInfoModal: FC<WebsiteInfoModalProps> = ({ onClose }) => {
  const { t, i18n } = useTranslation("common");
  const titleClasses = "text-xl font-bold";
  const linkClasses = "underline text-primary";

  return (
    <div data-testid="WebsiteInfoModal">
      <Modal display={true} title={t("website_info.title")} onClose={onClose}>
        <h3 className={titleClasses}>{t("website_info.front.title")}</h3>
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
        <h3 className={titleClasses}>{t("website_info.back.title")}</h3>
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
        <h3 className={titleClasses}>{t("website_info.server.title")}</h3>
        <p className="mb-4">{t("website_info.server.technologies")}</p>

        <h3 className={titleClasses + " mb-6"}>{t("website_info.green_it.title")}</h3>
        <WebsiteCarbonBadge dark={false} lang={i18n.language} url="cedric-wagner.fr" co2="0.04" percentage="96"/>                
      </Modal>
    </div>
  );
};

export default WebsiteInfoModal;
