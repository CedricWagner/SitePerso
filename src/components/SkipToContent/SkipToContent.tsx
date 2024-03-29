import React, { FC } from "react";
import { useTranslation } from "react-i18next";

interface SkipToContentProps {}

const SkipToContent: FC<SkipToContentProps> = () => {
  const { t } = useTranslation("common");

  return (
    <div data-testid="SkipToContent">
      <a
        href="#main-menu"
        className="btn btn-primary absolute left-0 m-3 -translate-y-16 p-3 transition focus:translate-y-0"
      >
        {t("skip.menu")}
      </a>
      <a
        href="#main-content"
        className="btn btn-primary absolute left-0 m-3 -translate-y-16 p-3 transition focus:translate-y-0"
      >
        {t("skip.content")}
      </a>
    </div>
  );
};

export default SkipToContent;
