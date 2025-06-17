import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-100);

  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 2.4rem;

  /* Hide mobile menu button on desktop */
  .mobile-menu-button {
    display: none;
  }

  @media (max-width: 992px) {
    grid-column: 1 / -1;
    justify-content: space-between;
    padding: 1.2rem 2.4rem;

    /* Show mobile menu button on mobile */
    .mobile-menu-button {
      display: flex;
      order: -1;
    }
  }

  @media (max-width: 768px) {
    padding: 1rem 1.6rem;
    gap: 1.6rem;
  }

  @media (max-width: 480px) {
    padding: 1rem 1.2rem;
    gap: 1.2rem;
  }
`;
