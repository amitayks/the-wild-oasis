import { ReactNode, ButtonHTMLAttributes } from "react";
import { StyledButton } from "./Button.styled";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
	variations?: "primary" | "secondary" | "danger";
	size?: "small" | "medium" | "large";
}

export const Button = ({ 
	children, 
	variations = "primary", 
	size = "medium", 
	...props 
}: ButtonProps) => {
	return (
		<StyledButton variations={variations} size={size} {...props}>
			{children}
		</StyledButton>
	);
};
