import { StyledHeading } from "./Heading.styled";

export const Heading = ({ children, ...props }) => {
  return <StyledHeading {...props}>{children}</StyledHeading>;
};
