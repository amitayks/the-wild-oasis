import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../features/authentication/useUser";

import styled from "styled-components";
import Spinner from "./Spinner";

const FullPage = styled`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;

`;

function ProtectedRout({ children }) {
  const navigate = useNavigate();
  //1:
  const { isLoading, isAuthenticated } = useUser();

  //2:
  useEffect(() => {
    if (!isAuthenticated && !isLoading) navigate("/login");
  }, [isAuthenticated, isLoading, navigate]);

  //3:
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
