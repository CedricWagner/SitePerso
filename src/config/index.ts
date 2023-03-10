import CommonFr from "@/translations/fr/common.json";
import CommonEn from "@/translations/en/common.json";

export const HCAPTCHA_SITEKEY = import.meta.env.VITE_HCAPTCHA_SITEKEY;
export const PROFILE_PHONE = import.meta.env.VITE_PROFILE_PHONE;
export const PROFILE_EMAIL = import.meta.env.VITE_PROFILE_EMAIL;
export const API_URL = import.meta.env.VITE_API_URL;
export const I18NEXT_CONFIG = {
  interpolation: { escapeValue: false },
  lng: "fr",
  resources: {
    en: {
      common: CommonEn,
    },
    fr: {
      common: CommonFr,
    },
  },
};
