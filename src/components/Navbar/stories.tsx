import React from "react";
import { storiesOf } from "@storybook/react";

import Navbar from "./Navbar";

const story = storiesOf("Navbar", module);

story.add("default", () => <Navbar />);
