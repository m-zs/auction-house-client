import React from "react";
import userEvent from "@testing-library/user-event";

import { createUser, customRender, screen, waitFor } from "utils/test";
import AccountMenu from "./AccountMenu";
import { MENU_ITEMS } from "./items";

describe("Navbar/AccountMenu - component", () => {
  const user = createUser();

  const setup = () => {
    customRender(<AccountMenu user={user} />);
  };

  it("should render base component", async () => {
    setup();

    userEvent.click(screen.getByTestId("account-menu-avatar"));

    await waitFor(() => {
      expect(screen.getAllByRole("tab").length).toBe(MENU_ITEMS.length + 1);
    });
    expect(screen.getByTestId("account-menu-avatar").textContent).toBe(
      user.username[0].toUpperCase()
    );
  });

  it("should render active tab panels", async () => {
    setup();

    userEvent.click(screen.getByTestId("account-menu-avatar"));

    await waitFor(() => {
      expect(screen.getByRole("tabpanel")).toBeInTheDocument();
    });

    for (let i = 0; i < MENU_ITEMS.length; i++) {
      userEvent.click(screen.getAllByRole("tab")[i]);

      // eslint-disable-next-line no-await-in-loop
      await waitFor(() => {
        expect(
          screen.getByText(MENU_ITEMS[i].items[0].text)
        ).toBeInTheDocument();
      });
    }
  });
});
