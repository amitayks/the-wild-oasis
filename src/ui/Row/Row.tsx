import { ReactNode, HTMLAttributes } from "react";
import { StyledRow } from "./Row.styled";

interface RowProps extends HTMLAttributes<HTMLDivElement> {
	children: ReactNode;
	type?: "horizontal" | "vertical";
}

export const Row = ({ children, type = "vertical", ...props }: RowProps) => {
	return (
		<StyledRow type={type} {...props}>
			{children}
		</StyledRow>
	);
};
