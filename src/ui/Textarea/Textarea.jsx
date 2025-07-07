import { forwardRef } from "react";
import { StyledTextarea } from "./Textarea.styled";

export const Textarea = forwardRef((props, ref) => (
	<StyledTextarea ref={ref} {...props} />
));
