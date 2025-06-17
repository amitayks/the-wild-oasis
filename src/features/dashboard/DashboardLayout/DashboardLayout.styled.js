import styled from "styled-components";

export const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.4rem;

  @media (max-width: 768px) {
    gap: 1.6rem;
  }

  @media (max-width: 480px) {
    gap: 1.2rem;
  }
`;
