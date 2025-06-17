import styled, { css } from "styled-components";

export const StyledForm = styled.form`
  ${(props) =>
    props.type === "regular" &&
    css`
      padding: 2.4rem 4rem;

      /* Box */
      background-color: var(--color-grey-0);
      border: 1px solid var(--color-grey-100);
      border-radius: var(--border-radius-md);

      @media (max-width: 768px) {
        padding: 2rem 2.4rem;
      }

      @media (max-width: 480px) {
        padding: 1.6rem 1.6rem;
      }
    `}

  ${(props) =>
    props.type === "modal" &&
    css`
      width: 80rem;

      @media (max-width: 992px) {
        width: 90vw;
        max-width: 60rem;
      }

      @media (max-width: 768px) {
        width: 95vw;
        max-width: 50rem;
      }

      @media (max-width: 480px) {
        width: 98vw;
        max-width: 40rem;
      }
    `}
    
  overflow: hidden;
  font-size: 1.4rem;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;
