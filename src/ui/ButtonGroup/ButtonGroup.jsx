import StyledButtonGroup from "./ButtonGroup.styled";

function ButtonGroup({ children, ...props }) {
  return <StyledButtonGroup {...props}>{children}</StyledButtonGroup>;
}

export default ButtonGroup;
