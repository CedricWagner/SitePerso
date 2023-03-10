import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Group } from "./Group";

import { rest } from "msw";
import { setupServer } from "msw/node";
import mock from "../../mock/getSkills.json";
import { QueryClientProvider } from "react-query";
import { queryClient } from "@/lib/react-query";
import { API_URL } from "@/config";
import { I18nextWrapper } from "@/mock/mockI18next";

const skillsResponseFr = rest.get(API_URL + "/api/skills", (req, res, ctx) => {
  return res(ctx.json(mock));
});

const server = setupServer(skillsResponseFr);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

const elem = (
  <I18nextWrapper>
    <QueryClientProvider client={queryClient}>
      <Group name="Group test" id={1} />
    </QueryClientProvider>
  </I18nextWrapper>
);

describe("<Group />", () => {
  test("it should mount", async () => {
    render(elem);

    const skillGroup = await screen.findByTestId("SkillGroup");

    expect(skillGroup).toBeInTheDocument();
  });

  test("it should display 2 items", async () => {
    render(elem);

    const items = await screen.findAllByTestId("SkillItem");

    expect(items).toHaveLength(2);
  });

  test('it should display the "PHP" item first', async () => {
    render(elem);

    const skills = await screen.findAllByRole("listitem");

    expect(skills[0]).toHaveTextContent("PHP");
  });
});
