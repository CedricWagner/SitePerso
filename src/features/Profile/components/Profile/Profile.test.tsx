import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Profile } from "./Profile";

import { rest } from "msw";
import { setupServer } from "msw/node";
import mock from "../../mock/getProfileInformations.json";
import { QueryClientProvider } from "react-query";
import { queryClient } from "@/lib/react-query";
import { API_URL } from "@/config";

const profileInformationsResponseFr = rest.get(
  API_URL + "/api/profile_informations",
  (req, res, ctx) => {
    return res(ctx.json(mock));
  }
);

const server = setupServer(profileInformationsResponseFr);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

const elem = (
  <QueryClientProvider client={queryClient}>
    <Profile />
  </QueryClientProvider>
);

describe("<Profile />", () => {
  test("it should mount", async () => {
    render(elem);

    const profileCardBlock = await screen.findByTestId("ProfileCard");

    expect(profileCardBlock).toBeInTheDocument();
  });
});
