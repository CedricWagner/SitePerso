import { getVerifyCaptchaUrl, getVerifyCaptcha } from "./getVerifyCaptcha";
import "@testing-library/jest-dom/extend-expect";
import { expectTypeOf } from "vitest";
import { CaptchaVerifyResponse } from "@/types";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { API_URL } from "@/config";
import { getCaptchaSuccess } from "@/mock/getCaptchaResponse";

const captchaResponse = rest.get(
  API_URL + getVerifyCaptchaUrl(),
  (req, res, ctx) => {
    return res(ctx.json(getCaptchaSuccess));
  }
);

const server = setupServer(captchaResponse);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("getVerifyCaptcha()", () => {
  test("it should return a Promise of type CaptchaVerifyResponse", async () => {
    const result = await getVerifyCaptcha();

    expectTypeOf(result).toEqualTypeOf<Promise<CaptchaVerifyResponse>>;
  });
});
