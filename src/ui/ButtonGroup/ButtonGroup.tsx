import { ReactNode, HTMLAttributes } from "react";
import StyledButtonGroup from "./ButtonGroup.styled";

interface ButtonGroupProps extends HTMLAttributes<HTMLDivElement> {
	children: ReactNode;
}

export const ButtonGroup = ({ children, ...props }: ButtonGroupProps) => {
	return <StyledButtonGroup {...props}>{children}</StyledButtonGroup>;
};
