import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

const AdminRoute = () => {
  const { state } = useContext(AuthContext);
  console.log("User, returning from here", state);
  return state ? <Outlet /> : <Navigate to="/loginpage" replace />;
};
export default AdminRoute;
