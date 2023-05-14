import React from "react";
import { Outlet, Navigate } from "react-router-dom";

function ProtectedRoute() {
  const isAuthenticated = !!localStorage.getItem("access_token");

  return <div>{isAuthenticated ? <Outlet /> : <Navigate to="/" />}</div>;
}

export default ProtectedRoute;
