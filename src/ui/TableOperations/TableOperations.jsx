import { StyledTableOperations } from "./TableOperations.styled";

function TableOperations({ children, ...props }) {
  return <StyledTableOperations {...props}>{children}</StyledTableOperations>;
}

export default TableOperations;
