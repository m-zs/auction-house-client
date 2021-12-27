import { createGlobalStyle } from "styled-components";

import { fonts } from "./fonts";

export const GlobalStyle = createGlobalStyle`
  ${fonts}

  body {
    font-family: 'Lato';
  }
`;
