import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useAuth } from "./AuthContext";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  useEffect(
    function () {
      if (!isAuthenticated) navigate("/login");
    },
    [isAuthenticated, navigate]
  );

  if (isAuthenticated) return children;
}
export default ProtectedRoute;
