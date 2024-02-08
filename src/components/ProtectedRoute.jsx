//ProtectedRoute.jsx
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ canActivate, redirectPath = "/" }) => {
  // Si el usuario no puede acceder a la ruta, redirige al path especificado
  if (!canActivate) {
    return <Navigate to={redirectPath} replace />;
  }
  // Si el usuario puede acceder a la ruta, renderiza el contenido de la ruta
  return <Outlet />;
};

export default ProtectedRoute;
