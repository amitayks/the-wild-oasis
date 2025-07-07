import { forwardRef, InputHTMLAttributes } from "react";
import { StyledInput } from "./Input.styled";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => (
	<StyledInput ref={ref} {...props} />
));
