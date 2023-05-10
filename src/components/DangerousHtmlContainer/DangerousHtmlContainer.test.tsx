import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import DangerousHtmlContainer from "./DangerousHtmlContainer";

describe("<DangerousHtmlContainer />", () => {
  test("it should mount", () => {
    render(<DangerousHtmlContainer html="test" />);

    const dangerousHtmlContainer = screen.getByTestId("DangerousHtmlContainer");

    expect(dangerousHtmlContainer).toBeInTheDocument();
  });

  test("it should remove script injection", () => {
    render(
      <DangerousHtmlContainer
        html={`lorem <b onmouseover="alert('mouseover');">ipsum</b>`}
      />
    );

    const dangerousHtmlContainer = screen.getByTestId("DangerousHtmlContainer");

    expect(dangerousHtmlContainer.innerHTML).toBe("lorem <b>ipsum</b>");
  });

  test("it should have the correct class names", () => {
    render(
      <DangerousHtmlContainer
        html={`lorem <b onmouseover="alert('mouseover');">ipsum</b>`}
        className="test"
      />
    );

    const dangerousHtmlContainer = screen.getByTestId("DangerousHtmlContainer");

    expect(dangerousHtmlContainer).toHaveClass("test");
  });

  test("it should handle the absence of classes", () => {
    render(
      <DangerousHtmlContainer
        html={`lorem <b onmouseover="alert('mouseover');">ipsum</b>`}
      />
    );

    const dangerousHtmlContainer = screen.getByTestId("DangerousHtmlContainer");

    expect(dangerousHtmlContainer).toHaveClass("text-editor");
  });

  test("it should add a blank attribute if external", () => {
    render(
      <DangerousHtmlContainer
        html={`lorem <a href="https://external.link">ipsum</a>`}
      />
    );

    const dangerousHtmlContainer = screen.getByTestId("DangerousHtmlContainer");

    expect(dangerousHtmlContainer.innerHTML).toBe(
      'lorem <a rel="noopener" target="_blank" href="https://external.link">ipsum</a>'
    );
  });

  test("it should not add attribute to link when internal", () => {
    render(
      <DangerousHtmlContainer
        html={`lorem <a href="/some-internal-page">ipsum</a>`}
      />
    );

    const dangerousHtmlContainer = screen.getByTestId("DangerousHtmlContainer");

    expect(dangerousHtmlContainer.innerHTML).toBe(
      'lorem <a href="/some-internal-page">ipsum</a>'
    );
  });
});
