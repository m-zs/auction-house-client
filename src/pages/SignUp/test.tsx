import userEvent from "@testing-library/user-event";
import React from "react";

import { customRender, screen, waitFor } from "utils/test";
import SignUp, { SIGN_UP } from "./SignUp";

describe("SignUp - component", () => {
  const variables = {
    username: "username",
    email: "username@email.com",
    password: "password",
  };
  const mocks = [
    {
      request: {
        query: SIGN_UP,
        variables,
      },
      result: {
        data: {
          createUser: { username: "username" },
        },
      },
    },
  ];
  const setup = () => {
    customRender(<SignUp />, { wrapperProps: { mocks } });
  };

  it("should display errors on invalid form submission", async () => {
    setup();

    expect(screen.queryAllByRole("alert").length).toBe(0);

    userEvent.click(screen.getByRole("button"));

    await waitFor(() => {
      expect(screen.getAllByRole("alert").length).toBe(3);
    });
  });

  it("should render success modal on form submission", async () => {
    setup();

    userEvent.type(screen.getByTestId("field-username"), variables.username);
    userEvent.type(screen.getByTestId("field-email"), variables.email);
    userEvent.type(screen.getByTestId("field-password"), variables.password);

    userEvent.click(screen.getByRole("button"));

    await waitFor(() => {
      expect(screen.getByTestId("success-modal")).toBeInTheDocument();
    });
  });
});
