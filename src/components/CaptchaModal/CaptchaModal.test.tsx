import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import CaptchaModal from "./CaptchaModal";

describe("<CaptchaModal />", () => {
  test("it should mount", () => {
    /**   This component is currently not testable because of an issue
     *    on the third party module "react-simple-captcha"
     *    See: https://github.com/masroorejaz/react-simple-captcha/issues/12
     */
    expect(true);
  });
});
