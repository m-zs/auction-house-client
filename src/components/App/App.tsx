import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "components/Navbar";

const Homepage = lazy(() => import("pages/Home"));
const Register = lazy(() => import("pages/Register"));

export const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Suspense fallback="loading...">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/sign-up" element={<Register />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
