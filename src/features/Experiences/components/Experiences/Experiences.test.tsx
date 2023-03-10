import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Experiences } from "./Experiences";
import { API_URL, I18NEXT_CONFIG } from "@/config";

import { rest } from "msw";
import { setupServer } from "msw/node";
import mock from "../../mock/getExperiences.json";
import { QueryClientProvider } from "react-query";
import { queryClient } from "@/lib/react-query";
import i18next from "i18next";
import { I18nextProvider } from "react-i18next";

i18next.init(I18NEXT_CONFIG);

const experiencesResponseFr = rest.get(
  API_URL + "/api/experiences",
  (req, res, ctx) => {
    return res(ctx.json(mock));
  }
);

const server = setupServer(experiencesResponseFr);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

const elem = (
  <I18nextProvider i18n={i18next}>
    <QueryClientProvider client={queryClient}>
      <Experiences />
    </QueryClientProvider>
  </I18nextProvider>
);

describe("<Experiences />", () => {
  test("it should mount", async () => {
    render(elem);

    const experienceTitle = await screen.findByText("Mes expériences");

    expect(experienceTitle).toBeInTheDocument();
  });

  test("it should display 2 items", async () => {
    render(elem);

    const experiences = await screen.getAllByRole("listitem");

    expect(experiences).toHaveLength(2);
  });

  test("it should display the last experience first", () => {
    render(elem);

    const experiences = screen.getAllByRole("listitem");

    expect(experiences[0]).toHaveTextContent("Last experience");
  });
});
