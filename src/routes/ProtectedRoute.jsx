import { Outlet, Navigate } from "react-router-dom";
import { isAuthenticated } from "../features/auth/services/authService";

const ProtectedRoute = () =>
  isAuthenticated() ? <Outlet /> : <Navigate replace to="/login" />;

export default ProtectedRoute;
