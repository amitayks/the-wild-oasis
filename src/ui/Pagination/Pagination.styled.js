import styled from "styled-components";

export const StyledPagination = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.6rem;
    align-items: center;
  }
`;

export const P = styled.p`
  font-size: 1.4rem;
  margin-left: 0.8rem;

  & span {
    font-weight: 600;
  }

  @media (max-width: 768px) {
    font-size: 1.3rem;
    margin-left: 0;
    text-align: center;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

export const Buttons = styled.div`
  display: flex;
  gap: 0.6rem;

  @media (max-width: 480px) {
    gap: 0.4rem;
  }
`;

export const PaginationButton = styled.button`
  background-color: ${(props) =>
		props.active ? " var(--color-brand-600)" : "var(--color-grey-50)"};
  color: ${(props) => (props.active ? " var(--color-brand-50)" : "inherit")};
  border: none;
  border-radius: var(--border-radius-sm);
  font-weight: 500;
  font-size: 1.4rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  padding: 0.6rem 1.2rem;
  transition: all 0.3s;

  &:has(span:last-child) {
    padding-left: 0.4rem;
  }

  &:has(span:first-child) {
    padding-right: 0.4rem;
  }

  & svg {
    height: 1.8rem;
    width: 1.8rem;
  }

  &:hover:not(:disabled) {
    background-color: var(--color-brand-600);
    color: var(--color-brand-50);
  }

  @media (max-width: 768px) {
    font-size: 1.3rem;
    padding: 0.5rem 1rem;

    & svg {
      height: 1.6rem;
      width: 1.6rem;
    }
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
    padding: 0.4rem 0.8rem;

    & svg {
      height: 1.4rem;
      width: 1.4rem;
    }
  }
`;
