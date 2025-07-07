import { ReactElement } from "react";
import { Label } from "recharts";
import { StyledError, StyledFormRow } from "./FormRowVertical.styled";

interface FormRowVerticalProps {
	label?: string;
	error?: string;
	children: ReactElement;
}

export const FormRowVertical = ({ label, error, children }: FormRowVerticalProps) => {
	return (
		<StyledFormRow>
			{label && <Label htmlFor={children.props.id}>{label}</Label>}
			{children}
			{error && <StyledError>{error}</StyledError>}
		</StyledFormRow>
	);
};
