import styled from "styled-components";
import { DashboardBox } from "../DashboardBox";

export const StyledSalesChart = styled(DashboardBox)`
  & .recharts-cartesian-grid-horizontal line,
  & .recharts-cartesian-grid-vertical line {
    stroke: var(--color-grey-300);
  }

  @media (max-width: 768px) {
    padding: 2rem 1.6rem;
  }

  @media (max-width: 480px) {
    padding: 1.6rem 1.2rem;
  }
`;
