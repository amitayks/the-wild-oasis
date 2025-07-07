import { ImgHTMLAttributes } from "react";
import { StyledFlag } from "./Flag.styled";

interface FlagProps extends ImgHTMLAttributes<HTMLImageElement> {}

export const Flag = ({ ...props }: FlagProps) => {
	return <StyledFlag {...props} />;
};
