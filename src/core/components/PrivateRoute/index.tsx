import { Navigate, Outlet } from "react-router"

import { isAuthenticated } from "../../utils/requests";

export const PrivateRoute = () => {
  return isAuthenticated() ? <Outlet /> : <Navigate to="/admin/auth/login" replace />;
}