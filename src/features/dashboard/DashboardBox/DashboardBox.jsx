import { StyledDashboardBox } from "./DashboardBox.styled";

function DashboardBox({ children, ...props }) {
  return <StyledDashboardBox {...props}>{children}</StyledDashboardBox>;
}

export default DashboardBox;
