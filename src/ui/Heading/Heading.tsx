import { ReactNode, HTMLAttributes } from "react";
import { StyledHeading } from "./Heading.styled";

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
	children: ReactNode;
	as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export const Heading = ({ children, ...props }: HeadingProps) => {
	return <StyledHeading {...props}>{children}</StyledHeading>;
};
