import { forwardRef } from "react";
import { StyledInput } from "./Input.styled";

export const Input = forwardRef((props, ref) => (
	<StyledInput ref={ref} {...props} />
));
