import { ReactNode, HTMLAttributes } from "react";
import { StyledTag } from "./Tag.styled";

interface TagProps extends HTMLAttributes<HTMLSpanElement> {
	children: ReactNode;
}

export const Tag = ({ children, ...props }: TagProps) => {
	return <StyledTag {...props}>{children}</StyledTag>;
};
