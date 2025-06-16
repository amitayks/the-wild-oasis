import { StyledButtonText } from "./styled";

function ButtonText({ children, ...props }) {
  return <StyledButtonText {...props}>{children}</StyledButtonText>;
}

export default ButtonText;
