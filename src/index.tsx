import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "@apollo/client";
import { ThemeProvider } from "styled-components";
import { StyledEngineProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";

import { client } from "utils/graphql/client";
import { GlobalStyle, theme } from "styles";
import App from "./components/App";

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <GlobalStyle />

          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ThemeProvider>
      </StyledEngineProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
