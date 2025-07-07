import { ReactNode, FormHTMLAttributes } from "react";
import { StyledForm } from "./Form.styled";

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
	children: ReactNode;
	type?: "regular" | "modal";
}

export const Form = ({ children, type = "regular", ...props }: FormProps) => {
	return (
		<StyledForm type={type} {...props}>
			{children}
		</StyledForm>
	);
};
