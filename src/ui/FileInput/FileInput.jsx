import { StyledFileInput } from "./FileInput.styled";

export const FileInput = ({ children, ...props }) => {
  return <StyledFileInput {...props}>{children}</StyledFileInput>;
};
