import styled from "styled-components";

export const StyledMobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  padding: 2rem 0;
  min-width: 28rem;

  @media (max-width: 768px) {
    min-width: 26rem;
    gap: 2.4rem;
  }

  @media (max-width: 480px) {
    min-width: 24rem;
    gap: 2rem;
  }

  @media (min-width: 993px) {
    display: none;
  }
`;
