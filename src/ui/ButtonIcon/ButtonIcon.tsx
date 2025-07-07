import { ReactNode, ButtonHTMLAttributes } from "react";
import { StyledButtonIcon } from "./ButtonIcon.styled";

interface ButtonIconProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
}

export const ButtonIcon = ({ children, ...props }: ButtonIconProps) => {
	return <StyledButtonIcon {...props}>{children}</StyledButtonIcon>;
};
