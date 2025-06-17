import { StyledFileInput } from "./FileInput.styled";

function FileInput({ children, ...props }) {
  return <StyledFileInput {...props}>{children}</StyledFileInput>;
}

export default FileInput;
