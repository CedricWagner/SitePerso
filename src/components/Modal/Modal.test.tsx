import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Modal from "./Modal";
import { vi } from "vitest";
import { I18nextWrapper } from "@/mock/mockI18next";

describe("<Modal />", () => {
  test("it should mount", () => {
    render(
      <I18nextWrapper>
        <Modal display={true} title="Titre" onClose={() => {}} />
      </I18nextWrapper>
    );

    const modal = screen.getByTestId("Modal");

    expect(modal).toBeInTheDocument();
  });

  test("it should call onClose when click on Close button", () => {
    const onClose = vi.fn().mockImplementation(() => {});

    render(
      <I18nextWrapper>
        <Modal display={true} title="Titre" onClose={onClose}></Modal>
      </I18nextWrapper>
    );

    const buttons = screen.getAllByRole("button");
    fireEvent.click(buttons[0]);
    fireEvent.click(buttons[1]);

    expect(onClose).toHaveBeenCalledTimes(2);
  });
});
