import styled from "styled-components";

export const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-lg);
  padding: 3.2rem 4rem;
  transition: all 0.5s;
  max-height: 90vh;
  overflow-y: auto;

  @media (max-width: 768px) {
    padding: 2.4rem 2rem;
    margin: 1rem;
    max-height: 95vh;
    width: calc(100vw - 2rem);
    max-width: fit-content;
  }

  @media (max-width: 480px) {
    padding: 2rem 1.6rem;
    margin: 0.5rem;
    width: calc(100vw - 1rem);
    max-width: fit-content;

    /* Special styling for mobile menu */
    &:has([class*="MobileMenu"]) {
      top: 20%;
      transform: translate(-50%, 0);
      border-radius: var(--border-radius-md);
    }
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--backdrop-color);
  backdrop-filter: blur(4px);
  z-index: 1000;
  transition: all 0.5s;
`;

export const Button = styled.button`
  background: none;
  border: none;
  padding: 0.4rem;
  border-radius: var(--border-radius-sm);
  transform: translateX(0.8rem);
  transition: all 0.2s;
  position: absolute;
  top: 1.2rem;
  right: 1.9rem;

  &:hover {
    background-color: var(--color-grey-100);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-500);

    @media (max-width: 480px) {
      width: 2rem;
      height: 2rem;
    }
  }

  @media (max-width: 768px) {
    top: 1rem;
    right: 1rem;
  }
`;
