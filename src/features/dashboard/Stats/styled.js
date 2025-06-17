import styled from "styled-components";

export const StyledStatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2.4rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.6rem;
  }

  @media (max-width: 480px) {
    gap: 1.2rem;
  }
`;
