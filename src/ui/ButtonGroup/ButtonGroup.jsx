import StyledButtonGroup from "./styled";

function ButtonGroup({ children, ...props }) {
  return <StyledButtonGroup {...props}>{children}</StyledButtonGroup>;
}

export default ButtonGroup;
