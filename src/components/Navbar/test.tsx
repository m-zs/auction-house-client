import React from "react";
import userEvent from "@testing-library/user-event";
import { useReactiveVar } from "@apollo/client";

import { useMatchMedia } from "hooks/match-media";
import { createUser, customRender, screen, waitFor } from "utils/test";
import Navbar from "./Navbar";

jest.mock("hooks/match-media");
jest.mock("@apollo/client");

describe("Navbar", () => {
  const user = createUser();

  const setup = () => {
    jest.clearAllMocks();

    customRender(<Navbar />);
  };

  it("should render desktop navbar for not logged user", () => {
    (useMatchMedia as jest.Mock).mockReturnValueOnce(false);
    (useReactiveVar as jest.Mock).mockReturnValueOnce(null);

    setup();

    expect(screen.getByTestId("navbar-items-container")).toBeInTheDocument();
    expect(screen.queryByTestId("account-menu")).not.toBeInTheDocument();
  });

  it("should render desktop navbar for logged user", () => {
    (useMatchMedia as jest.Mock).mockReturnValueOnce(false);
    (useReactiveVar as jest.Mock).mockReturnValueOnce(user);

    setup();

    expect(screen.getByTestId("navbar-items-container")).toBeInTheDocument();
    expect(screen.getByTestId("account-menu")).toBeInTheDocument();
  });

  it("should render functional mobile navbar and handle interaction", async () => {
    (useMatchMedia as jest.Mock).mockReturnValueOnce(true);
    (useReactiveVar as jest.Mock).mockReturnValueOnce(user);

    setup();

    expect(
      screen.queryByTestId("navbar-items-container")
    ).not.toBeInTheDocument();

    userEvent.click(screen.getByRole("button"));

    await waitFor(() => {
      expect(screen.getByTestId("navbar-items-container")).toBeInTheDocument();
    });
  });
});
