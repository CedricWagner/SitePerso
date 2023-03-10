import React, { FC } from "react";
import { useTranslation } from "react-i18next";

interface FooterProps {}

const Footer: FC<FooterProps> = () => {
  const [t] = useTranslation("common");
  return (
    <div data-testid="Footer" className="w-full bg-dark bg-opacity-50">
      <p className="py-4 px-2 text-center text-white">
        © 2023 {t("footer.created_by", { name: "Cédric Wagner" })}
      </p>
    </div>
  );
};

export default Footer;
