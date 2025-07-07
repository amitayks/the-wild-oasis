import { StyledButtonIcon } from "./ButtonIcon.styled";

export const ButtonIcon = ({ children, ...props }) => {
	return <StyledButtonIcon {...props}>{children}</StyledButtonIcon>;
};
