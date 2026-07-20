import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router";
import { MyStore } from "../constext/MyContext";

const ProtectedRoute = () => {
  const { currentUser } = useContext(MyStore);

  if (!currentUser) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
