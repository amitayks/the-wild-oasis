import { HTMLAttributes } from "react";
import { StyledSpinner } from "./Spinner.styled";

interface SpinnerProps extends HTMLAttributes<HTMLDivElement> {}

export const Spinner = ({ ...props }: SpinnerProps) => {
	return <StyledSpinner {...props} />;
};
