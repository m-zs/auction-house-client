import React from "react";

import { createUser, customRender, screen } from "utils/test";
import { User } from "state/vars";
import { USER_STATUS } from "utils/const/user";
import UserInfo from "./UserInfo";

describe("Navbar/AccountMenu/UserInfo - component", () => {
  const userBase = createUser();

  const setup = (user: User) => {
    customRender(<UserInfo user={user} />);
  };

  it("should render component for disabled user", async () => {
    setup({ ...userBase, status: USER_STATUS.ACTIVE });

    expect(screen.getByText(`Hello ${userBase.username}!`)).toBeInTheDocument();
    expect(screen.getByText(userBase.email)).toBeInTheDocument();
    expect(screen.queryByTestId("user-info-status")).not.toBeInTheDocument();
  });

  it("should render blocked status", () => {
    setup({ ...userBase, status: USER_STATUS.BLOCKED });

    expect(screen.getByTestId("user-info-status").textContent).toBe("blocked");
  });

  it("should render banned status", () => {
    setup({ ...userBase, status: USER_STATUS.BANNED });

    expect(screen.getByTestId("user-info-status").textContent).toBe("banned");
  });
});
