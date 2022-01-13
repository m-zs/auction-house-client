import React from "react";

import { customRender, screen } from "utils/test";

import MenuItem from "./MenuItem";

describe("Navbar/AccountMenu/MenuItem - component", () => {
  it("should display valid component", () => {
    const props = { text: "text", url: "url" };

    customRender(<MenuItem {...props} />);

    expect(screen.getByText(props.text)).toBeInTheDocument();
  });
});
