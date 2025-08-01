import styled from "styled-components";

export const StyledTableOperations = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
    gap: 1.2rem;
  }

  @media (max-width: 480px) {
    gap: 1rem;
  }
`;
