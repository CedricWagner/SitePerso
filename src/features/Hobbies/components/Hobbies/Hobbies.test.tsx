import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Hobbies } from "./Hobbies";

import { rest } from "msw";
import { setupServer } from "msw/node";
import mock from "../../mock/getHobbies.json";
import { QueryClientProvider } from "react-query";
import { queryClient } from "@/lib/react-query";
import { API_URL } from "@/config";
import { I18nextWrapper } from "@/mock/mockI18next";

const hobbiesResponseFr = rest.get(
  API_URL + "/api/hobbies",
  (req, res, ctx) => {
    return res(ctx.json(mock));
  }
);

const server = setupServer(hobbiesResponseFr);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

const elem = (
  <I18nextWrapper>
    <QueryClientProvider client={queryClient}>
      <Hobbies />
    </QueryClientProvider>
  </I18nextWrapper>
);

describe("<Hobbies />", () => {
  test("it should mount", async () => {
    render(elem);

    const hobbies = await screen.findByTestId("Hobbies");

    expect(hobbies).toBeInTheDocument();
  });

  test("it should display 2 items", async () => {
    render(elem);

    const hobbies = await screen.findAllByTestId("HobbyItem");

    expect(hobbies).toHaveLength(2);
  });

  test('it should display the "Musique" item first', async () => {
    render(elem);

    const hobbies = await screen.findAllByRole("listitem");

    expect(hobbies[0]).toHaveTextContent("Musique");
  });
});
