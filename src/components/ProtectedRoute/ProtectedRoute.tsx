import React, { FC } from "react";
import { Outlet, Navigate } from "react-router-dom";

import { getAuthUser } from "utils/auth";

const ProtectedRoute: FC = () => {
  if (!getAuthUser()) {
    return <Navigate to="/sign-in" />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
