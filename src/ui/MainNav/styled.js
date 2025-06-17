import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color: var(--color-grey-600);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
    border-radius: var(--border-radius-sm);

    @media (max-width: 768px) {
      padding: 1rem 1.6rem;
      font-size: 1.5rem;
    }

    @media (max-width: 480px) {
      padding: 0.8rem 1.2rem;
      font-size: 1.4rem;
      gap: 1rem;
    }
  }

  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    background-color: var(--color-grey-50);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
    transition: all 0.3s;

    @media (max-width: 480px) {
      width: 2rem;
      height: 2rem;
    }
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-600);
  }

  & span {
    @media (max-width: 480px) {
      font-size: 1.3rem;
    }
  }
`;
