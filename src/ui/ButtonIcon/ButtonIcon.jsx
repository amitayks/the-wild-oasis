import { StyledButtonIcon } from "./ButtonIcon.styled";

function ButtonIcon({ children, ...props }) {
  return <StyledButtonIcon {...props}>{children}</StyledButtonIcon>;
}

export default ButtonIcon;
