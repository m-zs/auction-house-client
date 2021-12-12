import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";

const Homepage = lazy(() => import("pages/Home"));
const Register = lazy(() => import("pages/Register"));

export const App = () => {
  return (
    <BrowserRouter>
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
