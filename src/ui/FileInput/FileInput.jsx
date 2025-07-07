import { forwardRef } from "react";
import { StyledFileInput } from "./FileInput.styled";

export const FileInput = forwardRef(({ children, ...props }, ref) => (
	<StyledFileInput ref={ref} {...props}>
		{children}
	</StyledFileInput>
));
