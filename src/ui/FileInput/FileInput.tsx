import { forwardRef, InputHTMLAttributes, ReactNode } from "react";
import { StyledFileInput } from "./FileInput.styled";

interface FileInputProps extends InputHTMLAttributes<HTMLInputElement> {
	children?: ReactNode;
}

export const FileInput = forwardRef<HTMLInputElement, FileInputProps>(({ children, ...props }, ref) => (
	<StyledFileInput ref={ref} {...props}>
		{children}
	</StyledFileInput>
));
