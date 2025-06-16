import { StyledFlag } from "./styled";

function Flag({ children, ...props }) {
  return <StyledFlag {...props}>{children}</StyledFlag>;
}

export default Flag;
