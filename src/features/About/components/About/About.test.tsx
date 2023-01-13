import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { About } from "./About";
import { API_URL } from "@/config";

import { rest } from "msw";
import { setupServer } from "msw/node";
import { getAboutUrl } from "../../api/getAbout";
import mock from "../../mock/getAbout.json";
import { QueryClientProvider } from "react-query";
import { queryClient } from "@/lib/react-query";

const aboutResponseFr = rest.get(
  API_URL + "/api" + getAboutUrl("fr"),
  (req, res, ctx) => {
    return res(ctx.json(mock));
  }
);

const server = setupServer(aboutResponseFr);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

const elem = (
  <QueryClientProvider client={queryClient}>
    <About />
  </QueryClientProvider>
);

describe("<About />", () => {
  test("it should mount", () => {
    render(elem);

    const about = screen.getByTestId("About");

    expect(about).toBeInTheDocument();
  });

  test("it should display the title", async () => {
    render(elem);

    const title = screen.getByText("Mock Présentation");

    expect(title).toBeInTheDocument();
  });
});
