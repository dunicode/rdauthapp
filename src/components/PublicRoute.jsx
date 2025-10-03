import { useContext } from "react";
import { Navigate } from "react-router";
import { AuthContext } from "../contexts/AuthContext.jsx";

const PublicRoute = ({ children }) => {
  const { isAuthenticated } = useContext(AuthContext);
  return !isAuthenticated ? children : <Navigate to="/home" replace />;
};

export default PublicRoute;
