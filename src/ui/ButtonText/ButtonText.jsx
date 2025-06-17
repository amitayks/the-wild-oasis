import { StyledButtonText } from "./ButtonText.styled";

export const ButtonText = ({ children, ...props }) => {
  return <StyledButtonText {...props}>{children}</StyledButtonText>;
};
