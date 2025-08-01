import styled from "styled-components";

export const StyledTable = styled.div`
  border: 1px solid var(--color-grey-200);
  font-size: 1.4rem;
  background-color: var(--color-grey-0);
  border-radius: 7px;
  overflow: hidden;

  @media (max-width: 768px) {
    overflow-x: auto;
    min-width: 600px;
    font-size: 1.3rem;
  }

  @media (max-width: 480px) {
    min-width: 500px;
    font-size: 1.2rem;
  }
`;

export const CommonRow = styled.div`
  display: grid;
  grid-template-columns: ${({ columns }) => columns};
  column-gap: 2.4rem;
  align-items: center;
  transition: none;

  @media (max-width: 768px) {
    column-gap: 1.6rem;
  }

  @media (max-width: 480px) {
    column-gap: 1.2rem;
  }
`;

export const StyledHeader = styled(CommonRow)`
  padding: 1.6rem 2.4rem;
  background-color: var(--color-grey-50);
  border-bottom: 1px solid var(--color-grey-100);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-600);

  @media (max-width: 768px) {
    padding: 1.2rem 1.6rem;
    font-size: 1.1rem;
  }

  @media (max-width: 480px) {
    padding: 1rem 1.2rem;
    font-size: 1rem;
  }
`;

export const StyledRow = styled(CommonRow)`
  padding: 1.2rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }

  @media (max-width: 768px) {
    padding: 1rem 1.6rem;
  }

  @media (max-width: 480px) {
    padding: 0.8rem 1.2rem;
  }
`;

export const StyledBody = styled.section`
  margin: 0.4rem 0;
`;

export const Footer = styled.footer`
  background-color: var(--color-grey-50);
  display: flex;
  justify-content: center;
  padding: 1.2rem;

  &:not(:has(*)) {
    display: none;
  }

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const Empty = styled.p`
  font-size: 1.6rem;
  font-weight: 500;
  text-align: center;
  margin: 2.4rem;

  @media (max-width: 768px) {
    font-size: 1.4rem;
    margin: 1.6rem;
  }
`;
