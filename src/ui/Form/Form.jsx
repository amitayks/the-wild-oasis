import { StyledForm } from "./Form.styled";

export const Form = ({ children, ...props }) => {
  return <StyledForm {...props}>{children}</StyledForm>;
};

Form.defaultProps = {
  type: "regular",
};
