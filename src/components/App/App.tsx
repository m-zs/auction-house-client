import React, { lazy, Suspense, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useMutation, useReactiveVar } from "@apollo/client";
import { CircularProgress, Typography } from "@mui/material";

import { setAuthUser } from "utils/auth";
import { capitalize } from "utils/common";
import { globalMessageVar } from "state/vars";
import Navbar from "components/Navbar";
import Modal from "components/Modal";
import {
  RefreshTokenResponse,
  REFRESH_TOKEN,
} from "api/mutations/refresh-token";
import { ERROR_CODES } from "utils/const/error-codes";
import * as S from "./styles";

const Homepage = lazy(() => import("pages/Home"));
const SignUp = lazy(() => import("pages/SignUp"));
const SignIn = lazy(() => import("pages/SignIn"));

export const App = () => {
  const globalMessage = useReactiveVar(globalMessageVar);
  const [refreshToken, { loading, called }] = useMutation<RefreshTokenResponse>(
    REFRESH_TOKEN,
    {
      errorPolicy: "all",
    }
  );

  useEffect(() => {
    refreshToken({
      update: (_, { errors, data }) => {
        if (errors) {
          const { statusCode, message } = errors?.[0] || {};

          // ignore unauth error, its fine if user is not logged in
          // its not fine if other error occures
          if (statusCode !== ERROR_CODES.UNAUTHENTICATED) {
            globalMessageVar({
              type: "error",
              message: Array.isArray(message) ? message.join() : message,
            });
          }
        }

        if (data?.refresh.token) {
          setAuthUser(data.refresh.token);
        }
      },
    });
  }, []);

  if (loading || !called) {
    return (
      <S.PreloadContainer maxWidth="sm">
        <CircularProgress />
      </S.PreloadContainer>
    );
  }

  return (
    <>
      <Navbar />

      <S.StyledContainer>
        <Suspense fallback="loading...">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/sign-in" element={<SignIn />} />
          </Routes>
        </Suspense>
      </S.StyledContainer>

      {globalMessage && (
        <Modal
          open
          heading={capitalize(globalMessage.type)}
          onClose={() => globalMessageVar(undefined)}
        >
          <>
            <Typography component="h3" variant="subtitle1">
              {globalMessage.message}
            </Typography>
            <Typography component="h3" variant="subtitle1">
              Please try to refresh the page
            </Typography>
          </>
        </Modal>
      )}
    </>
  );
};

export default App;
