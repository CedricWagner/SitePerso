import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Trainings } from "./Trainings";

import { rest } from "msw";
import { setupServer } from "msw/node";
import mock from "../../mock/getTrainings.json";
import { QueryClientProvider } from "react-query";
import { queryClient } from "@/lib/react-query";
import { API_URL } from "@/config";
import { I18nextWrapper } from "@/mock/mockI18next";

const itemsResponseFr = rest.get(
  API_URL + "/api/trainings",
  (req, res, ctx) => {
    return res(ctx.json(mock));
  }
);

const server = setupServer(itemsResponseFr);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

const elem = (
  <I18nextWrapper>
    <QueryClientProvider client={queryClient}>
      <Trainings />
    </QueryClientProvider>
  </I18nextWrapper>
);

describe("<Trainings />", () => {
  test("it should mount", () => {
    render(elem);

    const trainings = screen.getByTestId("Waiting");

    expect(trainings).toBeInTheDocument();
  });

  test("it should display 2 items", async () => {
    render(elem);

    const items = await screen.findAllByTestId("TrainingItem");

    expect(items).toHaveLength(2);
  });

  test('it should display the "DUT..." training first', async () => {
    render(elem);

    const items = await screen.findAllByTestId("TrainingItem");

    expect(items[0]).toHaveTextContent("DUT...");
  });
});
