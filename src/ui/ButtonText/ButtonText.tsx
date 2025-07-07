import { ReactNode, ButtonHTMLAttributes } from "react";
import { StyledButtonText } from "./ButtonText.styled";

interface ButtonTextProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
}

export const ButtonText = ({ children, ...props }: ButtonTextProps) => {
	return <StyledButtonText {...props}>{children}</StyledButtonText>;
};
