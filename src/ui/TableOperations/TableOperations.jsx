import { StyledTableOperations } from "./TableOperations.styled";

export const TableOperations = ({ children, ...props }) => {
  return <StyledTableOperations {...props}>{children}</StyledTableOperations>;
};
