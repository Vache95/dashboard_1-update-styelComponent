import useAuth from "hook/useAuth";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const auth = useAuth();
  return auth ? <Outlet /> : <Navigate to="/signin" />;
};

export default PrivateRoute;
