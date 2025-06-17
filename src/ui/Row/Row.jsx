import { StyledRow } from "./Row.styled";

function Row({ children, ...props }) {
  return <StyledRow {...props}>{children}</StyledRow>;
}

export default Row;

Row.defaultProps = {
  type: "vertical",
};
