import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../features/authentication/useUser";

import Spinner from "../Spinner";
import { FullPage } from "./ProtectedRoute.styled";

function ProtectedRout({ children }) {
  const navigate = useNavigate();
  const { isLoading, isAuthenticated } = useUser();

  useEffect(() => {
    if (!isAuthenticated && !isLoading) navigate("/login");
  }, [isAuthenticated, isLoading, navigate]);

  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  //4:
  if (isAuthenticated) return children;
}

export default ProtectedRout;
