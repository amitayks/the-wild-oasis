import { StyledButton } from "./styled";

function Button({ children, ...props }) {
  return <StyledButton {...props}>{children}</StyledButton>;
}

Button.defaultProps = {
  variations: "primary",
  size: "medium",
};

export default Button;
