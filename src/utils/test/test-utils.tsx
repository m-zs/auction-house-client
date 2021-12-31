import React, { FC, ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import { ThemeProvider } from "styled-components";
import { StyledEngineProvider } from "@mui/material";

import { GlobalStyle, theme } from "styles";

const Providers: FC = ({ children }) => (
  <MockedProvider>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  </MockedProvider>
);

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: Providers, ...options });

export * from "@testing-library/react";
export { customRender };
