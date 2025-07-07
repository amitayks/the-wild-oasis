import { forwardRef, TextareaHTMLAttributes } from "react";
import { StyledTextarea } from "./Textarea.styled";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>((props, ref) => (
	<StyledTextarea ref={ref} {...props} />
));
