import { HTMLAttributes } from "react";
import { StyledSpinnerMini } from "./SpinnerMini.styled";

interface SpinnerMiniProps extends HTMLAttributes<HTMLDivElement> {}

export const SpinnerMini = ({ ...props }: SpinnerMiniProps) => {
	return <StyledSpinnerMini {...props} />;
};
