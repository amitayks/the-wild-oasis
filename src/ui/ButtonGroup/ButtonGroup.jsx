import StyledButtonGroup from "./ButtonGroup.styled";

export const ButtonGroup = ({ children, ...props }) => {
  return <StyledButtonGroup {...props}>{children}</StyledButtonGroup>;
};
