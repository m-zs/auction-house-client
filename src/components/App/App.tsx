import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container } from "@mui/material";

import Navbar from "components/Navbar";

const Homepage = lazy(() => import("pages/Home"));
const SignUp = lazy(() => import("pages/SignUp"));

export const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Container>
        <Suspense fallback="loading...">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/sign-up" element={<SignUp />} />
          </Routes>
        </Suspense>
      </Container>
    </BrowserRouter>
  );
};

export default App;
