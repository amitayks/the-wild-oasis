import { StyledTag } from "./Tag.styled";

export const Tag = ({ children, ...props }) => {
	return <StyledTag {...props}>{children}</StyledTag>;
};
