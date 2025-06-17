import styled from "styled-components";

export const StyledHeaderMenu = styled.ul`
  display: flex;
  gap: 2.4rem;

  @media (max-width: 768px) {
    gap: 1.6rem;
  }

  @media (max-width: 480px) {
    gap: 1.2rem;
  }
`;
