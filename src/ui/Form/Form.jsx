import { StyledForm } from "./Form.styled";

function Form({ children, ...props }) {
  return <StyledForm {...props}>{children}</StyledForm>;
}

export default Form;

Form.defaultProps = {
  type: "regular",
};
