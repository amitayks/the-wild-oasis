import styled from "styled-components";

export const StyledDashboardBox = styled.div`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);

  padding: 3.2rem;

  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  @media (max-width: 768px) {
    padding: 2.4rem 1.6rem;
    gap: 1.6rem;
  }

  @media (max-width: 480px) {
    padding: 2rem 1.2rem;
    gap: 1.2rem;
  }
`;
