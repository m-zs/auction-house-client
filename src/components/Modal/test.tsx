import React from "react";
import userEvent from "@testing-library/user-event";

import { customRender, screen } from "utils/test";
import Modal from "./Modal";

describe("Modal - component", () => {
  it("should render base structure with children", () => {
    customRender(
      <Modal open heading="Test">
        <h1>Test heading</h1>
      </Modal>
    );

    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
  });

  it("should trigger onClose function on button click", () => {
    const onClose = jest.fn();

    customRender(<Modal open heading="Test" onClose={onClose} />);

    userEvent.click(screen.getByRole("button"));

    expect(onClose).toHaveBeenCalled();
  });
});
