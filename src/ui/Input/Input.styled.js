import styled from "styled-components";

export const StyledInput = styled.input`
  border: solid var(--color-grey-300);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-sm);
  padding: 0.8rem 1.2rem;
  box-shadow: var(--Shadow-sm);

  @media (max-width: 768px) {
    width: 500px;
  }

  @media (max-width: 560px) {
    max-width: fit-content;
  }
`;
