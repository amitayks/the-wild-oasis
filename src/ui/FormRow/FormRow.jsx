import { Label } from "recharts";
import { Error, StyledFormRow } from "./FormRow.styled";

function FormRow({ children, error, label }) {
  return (
    <StyledFormRow>
      <Label htmlFor={children.props?.id}>{label}</Label>
      {children}
      {error && <Error>{error}</Error>}
    </StyledFormRow>
  );
}

export default FormRow;
