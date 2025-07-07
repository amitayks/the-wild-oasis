import { StyledRow } from "./Row.styled";

export const Row = ({ children, ...props }) => {
	return <StyledRow {...props}>{children}</StyledRow>;
};

Row.defaultProps = {
	type: "vertical",
};
