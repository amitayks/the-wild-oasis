import { ReactNode, HTMLAttributes } from "react";
import { StyledTableOperations } from "./TableOperations.styled";

interface TableOperationsProps extends HTMLAttributes<HTMLDivElement> {
	children: ReactNode;
}

export const TableOperations = ({ children, ...props }: TableOperationsProps) => {
	return <StyledTableOperations {...props}>{children}</StyledTableOperations>;
};
