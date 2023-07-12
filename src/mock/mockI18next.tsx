import i18next from "i18next";
import { I18NEXT_CONFIG } from "@/config";
import { I18nextProvider } from "react-i18next";
import { FC, Suspense } from "react";

i18next.init(I18NEXT_CONFIG);

interface WrapperProps {
  children?: React.ReactNode;
}

export const I18nextWrapper: FC<WrapperProps> = ({ children }) => {
  return (
    <I18nextProvider i18n={i18next}>
      <Suspense fallback="loading">{children}</Suspense>
    </I18nextProvider>
  );
};
