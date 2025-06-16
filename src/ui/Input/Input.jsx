import { StyledInput } from "./styled";

function Input({ children, ...props }) {
  return <StyledInput {...props}>{children}</StyledInput>;
}

export default Input;
