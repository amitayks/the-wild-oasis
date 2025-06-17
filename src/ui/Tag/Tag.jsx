import { StyledTag } from "./Tag.styled";

function Tag({ children, ...props }) {
  return <StyledTag {...props}>{children}</StyledTag>;
}

export default Tag;
