import { addDecorator } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { withInfo } from "@storybook/addon-info";
import { BrowserRouter } from "react-router-dom";

import { GlobalStyle, theme } from "../src/styles";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

addDecorator(withInfo);
addDecorator((storyFn) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <BrowserRouter>{storyFn()}</BrowserRouter>
  </ThemeProvider>
));
