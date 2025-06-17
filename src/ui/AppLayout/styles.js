import styled from "styled-components";

export const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto 1fr;
  }
`;

export const Main = styled.main`
  background-color: var(--color-grey-50);
  padding: 4rem 4.8rem 6.4rem;
  overflow: scroll;

  @media (max-width: 768px) {
    padding: 2rem 1.6rem 3.2rem;
  }

  @media (max-width: 480px) {
    padding: 1.6rem 1.2rem 2.4rem;
  }
`;

export const Container = styled.div`
  max-width: 100rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  @media (max-width: 768px) {
    gap: 2.4rem;
  }

  @media (max-width: 480px) {
    gap: 1.6rem;
  }
`;
