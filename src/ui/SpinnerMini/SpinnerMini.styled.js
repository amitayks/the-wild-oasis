import { BiLoaderAlt } from "react-icons/bi";
import styled, { keyframes } from "styled-components";

export const rotate = keyframes`
  to {
    transform: rotate(1turn)
  }
`;

export const StyledSpinnerMini = styled(BiLoaderAlt)`
  width: 2.4rem;
  height: 2.4rem;
  animation: ${rotate} 1.5s infinite linear;
`;
