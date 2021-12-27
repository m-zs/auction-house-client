import { createGlobalStyle } from "styled-components";

import { fonts } from "./fonts";

export const GlobalStyle = createGlobalStyle`
  ${fonts}

  ${({ theme }) => `
    body {
      font-family: ${theme.fonts.main};
      padding: 0;
      margin: 0;
    }

    a {
      text-decoration: none;
      color: inherit;

      &:hover {
        text-decoration: underline;
      }
    }
  `}
`;
