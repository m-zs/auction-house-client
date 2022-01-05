import React from "react";
import { storiesOf } from "@storybook/react";

import Modal from "./Modal";

const story = storiesOf("Modal", module);

const lorem = `
  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum
  architecto, debitis nemo dolores reprehenderit porro quo, officiis
  perspiciatis molestiae consequuntur consequatur, possimus harum hic ipsum
  ducimus facere assumenda cumque adipisci.
`;

story.add("default", () => (
  <Modal heading="Heading" open>
    {lorem}
  </Modal>
));

story.add("with onClose callback", () => (
  // eslint-disable-next-line no-alert
  <Modal heading="Heading" open onClose={() => alert("Test callback")}>
    {lorem}
  </Modal>
));
