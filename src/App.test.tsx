import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";

import { rest } from "msw";
import { setupServer } from "msw/node";
import { getCaptchaSuccess } from "./mock/getCaptchaResponse";
import { QueryClientProvider } from "react-query";
import { queryClient } from "@/lib/react-query";
import { API_URL } from "./config";
import { getVerifyCaptchaUrl } from "./api/getVerifyCaptcha";
import getProfileInformations from "./features/Profile/mock/getProfileInformations.json";
import getAbout from "./features/About/mock/getAbout.json";

const captchaStateResponse = rest.get(
  API_URL + getVerifyCaptchaUrl(),
  (req, res, ctx) => {
    return res(ctx.json(getCaptchaSuccess));
  }
);

const profileInformationsResponseFr = rest.get(
  API_URL + "/api/profile_informations",
  (req, res, ctx) => {
    return res(ctx.json(getProfileInformations));
  }
);

const aboutResponseFr = rest.get(
  API_URL + "/api/text_blocks",
  (req, res, ctx) => {
    return res(ctx.json(getAbout));
  }
);

const server = setupServer(
  captchaStateResponse,
  profileInformationsResponseFr,
  aboutResponseFr
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

const elem = (
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
);

describe("<App />", () => {
  test("it should display the title", async () => {
    render(elem);

    const title = await screen.findAllByText("Cédric Wagner");

    expect(title.length).toBeGreaterThanOrEqual(1);
  });
});
