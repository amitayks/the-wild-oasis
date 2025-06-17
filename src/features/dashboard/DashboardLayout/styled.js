// import styled from "styled-components";

// export const StyledDashboardLayout = styled.div`
//   display: grid;
//   grid-template-columns: 1fr 1fr 1fr 1fr;
//   grid-template-rows: auto 34rem auto;
//   gap: 2.4rem;

//   /* Stats component will span all columns */
//   & > div:first-child {
//     grid-column: 1 / -1;
//   }

//   @media (max-width: 1200px) {
//     grid-template-columns: 1fr 1fr;
//     grid-template-rows: auto auto auto auto;
//     gap: 2rem;
//   }

//   @media (max-width: 768px) {
//     grid-template-columns: 1fr;
//     grid-template-rows: repeat(auto, auto);
//     gap: 1.6rem;
//   }
// `;
import styled from "styled-components";

export const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.4rem;

  @media (max-width: 768px) {
    gap: 1.6rem;
  }
`;
