import styled from "styled-components";

export const ChartBox = styled.div`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);

  padding: 2.4rem 3.2rem;

  & > *:first-child {
    margin-bottom: 1.6rem;
  }

  & .recharts-pie-label-text {
    font-weight: 600;
  }

  @media (max-width: 768px) {
    padding: 2rem 1.6rem;
  }

  @media (max-width: 480px) {
    padding: 1.6rem 1.2rem;
  }
`;
