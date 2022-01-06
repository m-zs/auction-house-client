import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "components/Navbar";
import * as S from "./styles";

const Homepage = lazy(() => import("pages/Home"));
const SignUp = lazy(() => import("pages/SignUp"));

export const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <S.StyledContainer>
        <Suspense fallback="loading...">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/sign-up" element={<SignUp />} />
          </Routes>
        </Suspense>
      </S.StyledContainer>
    </BrowserRouter>
  );
};

export default App;
