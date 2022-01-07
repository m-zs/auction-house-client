import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "components/Navbar";
import * as S from "./styles";

const Homepage = lazy(() => import("pages/Home"));
const SignUp = lazy(() => import("pages/SignUp"));
const SignIn = lazy(() => import("pages/SignIn"));

export const App = () => {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
};

export default App;
