import { StyledHeading } from "./Heading.styled";

function Heading({ children, ...props }) {
  return <StyledHeading {...props}>{children}</StyledHeading>;
}

export default Heading;
