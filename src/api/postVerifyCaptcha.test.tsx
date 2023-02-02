import { getVerifyCaptchaUrl, postVerifyCaptcha } from "./postVerifyCaptcha";
import "@testing-library/jest-dom/extend-expect";
import { expectTypeOf, vi } from "vitest";
import { CaptchaVerifyResponse } from "@/types";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { API_URL } from "@/config";

const captchaResponse = rest.post(
  API_URL + getVerifyCaptchaUrl(),
  (req, res, ctx) => {
    return res(ctx.json({ result: true }));
  }
);

const server = setupServer(captchaResponse);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("postVerifyCaptcha()", () => {
  test("it should return a Promise of type CaptchaVerifyResponse", async () => {
    const result = await postVerifyCaptcha("re35eg4e3g54eg");

    expectTypeOf(result).toEqualTypeOf<Promise<CaptchaVerifyResponse>>;
  });

  test("it should return a positive result", async () => {
    const result = await postVerifyCaptcha("re35eg4e3g54eg");

    expect(result.result).toBe(true);
  });
});
