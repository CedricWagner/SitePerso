import React, { FC } from "react";
import { useTranslation } from "react-i18next";

interface UnderContructionProps {}

const UnderContruction: FC<UnderContructionProps> = () => {
  const [t] = useTranslation("common");
  return (
    <div
      data-testid="UnderContruction"
      className="flex h-40 flex-col items-center justify-center"
    >
      <p className="text-xl">{t("under_construction")}</p>
    </div>
  );
};

export default UnderContruction;
