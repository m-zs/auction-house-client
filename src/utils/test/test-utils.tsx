import React, { FC, ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";
import { MockedProvider, MockedProviderProps } from "@apollo/client/testing";
import { ThemeProvider } from "styled-components";
import { StyledEngineProvider } from "@mui/material";
import "@testing-library/jest-dom";

import { GlobalStyle, theme } from "styles";

interface ProvidersProps {
  wrapperProps?: {
    mocks?: MockedProviderProps["mocks"];
  };
}

const Providers: FC<ProvidersProps> = ({ children, wrapperProps }) => (
  <MockedProvider mocks={wrapperProps?.mocks || []}>
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
  options?: Omit<RenderOptions, "wrapper"> & ProvidersProps
) =>
  render(ui, {
    wrapper: (props) => (
      <Providers {...props} wrapperProps={options?.wrapperProps} />
    ),
    ...options,
  });

export * from "@testing-library/react";
export { customRender };
