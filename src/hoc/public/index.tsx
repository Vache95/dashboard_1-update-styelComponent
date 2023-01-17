import useAuth from "hook/useAuth";
import { Navigate, Outlet } from "react-router-dom";

const PublicRoute = () => {
  const auth = useAuth();
  return !auth ? <Outlet /> : <Navigate to="/" />;
};

export default PublicRoute;
