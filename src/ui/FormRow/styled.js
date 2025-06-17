import styled from "styled-components";

export const StyledFormRow = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 24rem 1fr 1.2fr;
  gap: 2.4rem;
  padding: 1.2rem 0;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }

  &:has(button) {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: stretch;
    }
  }

  @media (max-width: 992px) {
    grid-template-columns: 20rem 1fr 1fr;
    gap: 1.6rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
    text-align: left;
  }

  @media (max-width: 480px) {
    gap: 0.8rem;
  }
`;

export const Label = styled.label`
  font-weight: 500;

  @media (max-width: 768px) {
    margin-bottom: 0.4rem;
  }
`;

export const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-red-700);

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;
