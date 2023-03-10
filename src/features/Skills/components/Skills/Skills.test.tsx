import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Skills } from "./Skills";
import { API_URL } from "@/config";

import { rest } from "msw";
import { setupServer } from "msw/node";
import mock from "../../mock/getSkillGroups.json";
import { QueryClientProvider } from "react-query";
import { queryClient } from "@/lib/react-query";
import { I18nextWrapper } from "@/mock/mockI18next";

const skillGroupsResponseFr = rest.get(
  API_URL + "/api/skill_groups",
  (req, res, ctx) => {
    return res(ctx.json(mock));
  }
);

const skillsResponseFr = rest.get(API_URL + "/api/skills", (req, res, ctx) => {
  return res(ctx.json(mock));
});

const server = setupServer(skillGroupsResponseFr, skillsResponseFr);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

const elem = (
  <I18nextWrapper>
    <QueryClientProvider client={queryClient}>
      <Skills />
    </QueryClientProvider>
  </I18nextWrapper>
);

describe("<Skills />", () => {
  test("it should mount", () => {
    render(elem);

    const skills = screen.getByTestId("PanelWaiting");

    expect(skills).toBeInTheDocument();
  });

  test("it should display 2 items", async () => {
    render(elem);

    const skills = await screen.findAllByTestId("SkillGroup");

    expect(skills).toHaveLength(2);
  });

  test('it should display the "Languages" group first', async () => {
    render(elem);

    const skills = await screen.findAllByRole("listitem");

    expect(skills[0]).toHaveTextContent("Languages");
  });
});
