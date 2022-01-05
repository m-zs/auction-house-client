import React from "react";
import { storiesOf } from "@storybook/react";

import FieldWithError from "./FieldWithError";

const story = storiesOf("FieldWithError", module);

story.add("without error", () => (
  <FieldWithError variant="outlined" placeholder="Placeholder" label="Label" />
));

story.add("with error", () => (
  <FieldWithError
    variant="outlined"
    placeholder="Placeholder"
    label="Label"
    errorMessage="An error occured"
  />
));
