import { CaptchaVerifyResponse } from "./../types/index";
import { API_URL } from "@/config";

import { axios } from "@/lib/axios";

export const getVerifyCaptchaUrl = (): string => {
  return `/api/captcha/verify`;
};

export const postVerifyCaptcha = (
  clientResponse: string
): Promise<CaptchaVerifyResponse> => {
  return axios.post(API_URL + getVerifyCaptchaUrl(), {
    clientResponse: clientResponse,
  });
};
