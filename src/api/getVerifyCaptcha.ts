import { CaptchaVerifyResponse } from "./../types/index";
import { API_URL } from "@/config";

import { axios } from "@/lib/axios";

export const getVerifyCaptchaUrl = (): string => {
  return "/api/captcha/state";
};

export const getVerifyCaptcha = (): Promise<CaptchaVerifyResponse> => {
  return axios.get(API_URL + getVerifyCaptchaUrl(), { withCredentials: true });
};
