import { StyledTag } from "./styled";

function Tag({ children, ...props }) {
  return <StyledTag {...props}>{children}</StyledTag>;
}

export default Tag;
