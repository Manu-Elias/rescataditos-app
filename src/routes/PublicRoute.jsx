import { Outlet, Navigate } from "react-router-dom";
import { isAuthenticated } from "../features/auth/services/authService";

const PublicRoute = () =>
  isAuthenticated() ? <Navigate replace to="/admin" /> : <Outlet />;

export default PublicRoute;
