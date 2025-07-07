import { Label } from "recharts";
import { StyledError, StyledFormRow } from "./FormRowVertical.styled";

export const FormRowVertical = ({ label, error, children }) => {
	return (
		<StyledFormRow>
			{label && <Label htmlFor={children.props.id}>{label}</Label>}
			{children}
			{error && <StyledError>{error}</StyledError>}
		</StyledFormRow>
	);
};
