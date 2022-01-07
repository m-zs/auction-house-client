import React from "react";
import userEvent from "@testing-library/user-event";
import * as faker from "faker";

import { customRender, screen, waitFor } from "utils/test";
import { setAuthToken } from "utils/auth";
import SignIn, { SIGN_IN } from "./SignIn";

const mockedUsedNavigate = jest.fn();

jest.mock("utils/auth", () => ({ setAuthToken: jest.fn() }));
jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUsedNavigate,
}));

describe("SignIn - component", () => {
  const variables = {
    username: faker.internet.userName(),
    password: faker.internet.password(8),
  };
  const token = "token";
  const mocks = [
    {
      request: {
        query: SIGN_IN,
        variables,
      },
      result: {
        data: {
          signIn: { token },
        },
      },
    },
  ];
  const setup = () => {
    customRender(<SignIn />, { wrapperProps: { mocks } });
  };

  it("should display errors on invalid form submission", async () => {
    setup();

    expect(screen.queryAllByRole("alert").length).toBe(0);

    userEvent.click(screen.getByRole("button"));

    await waitFor(() => {
      expect(screen.getAllByRole("alert").length).toBe(2);
    });
  });

  it("should render success modal on form submission", async () => {
    setup();

    userEvent.type(screen.getByTestId("field-username"), variables.username);
    userEvent.type(screen.getByTestId("field-password"), variables.password);

    userEvent.click(screen.getByRole("button"));

    await waitFor(() => {
      expect(setAuthToken).toHaveBeenCalledWith(token);
    });
    expect(mockedUsedNavigate).toHaveBeenCalledWith("/", { replace: true });
  });
});
