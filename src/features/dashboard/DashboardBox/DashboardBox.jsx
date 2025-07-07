import { StyledDashboardBox } from "./DashboardBox.styled";

export const DashboardBox = ({ children, ...props }) => {
	return <StyledDashboardBox {...props}>{children}</StyledDashboardBox>;
};
