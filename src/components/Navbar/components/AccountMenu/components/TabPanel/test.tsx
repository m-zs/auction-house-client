import React from "react";

import { customRender, screen } from "utils/test";

import TabPanel from "./TabPanel";

describe("Navbar/AccountMenu/TabPanel - component", () => {
  const childrenText = "test string";

  const setup = ({ active = false } = {}) => {
    customRender(<TabPanel active={active}>{childrenText}</TabPanel>);
  };

  it("should render children when element is active", () => {
    setup({ active: true });

    expect(screen.getByText(childrenText)).toBeInTheDocument();
  });

  it("should not render children when element is not active", () => {
    setup();

    expect(screen.queryByText(childrenText)).not.toBeInTheDocument();
  });
});
