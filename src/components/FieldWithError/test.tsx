import React from "react";

import { customRender, screen } from "utils/test";
import FieldWithError from "./FieldWithError";

describe("FieldWithError - component", () => {
  const setup = (error?: string) => {
    customRender(
      <FieldWithError
        errorMessage={error}
        inputProps={{ "data-testid": "field" }}
      />
    );
  };

  it("should render component without error", () => {
    setup();

    expect(screen.getByTestId("field")).toBeInTheDocument();
    expect(screen.queryByRole("alert")).not.toBeInTheDocument();
  });

  it("should render component with error", () => {
    setup("an error occured");

    expect(screen.getByRole("alert")).toBeInTheDocument();
  });
});
