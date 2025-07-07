import { ReactElement, ReactNode } from "react";
import { Label } from "recharts";
import { Error, StyledFormRow } from "./FormRow.styled";

interface FormRowProps {
	children: ReactElement;
	error?: string;
	label?: string;
}

export const FormRow = ({ children, error, label }: FormRowProps) => {
	return (
		<StyledFormRow>
			<Label htmlFor={children.props?.id}>{label}</Label>
			{children}
			{error && <Error>{error}</Error>}
		</StyledFormRow>
	);
};
