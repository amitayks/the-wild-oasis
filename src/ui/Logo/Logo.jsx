import { useDarkMode } from "../../context/useDarkMode";
import { Img, StyledLogo } from "./Logo.styled";

export const Logo = () => {
  const { isDarkMode } = useDarkMode();
  const src = isDarkMode ? "/logo-dark.png" : "/logo-light.png";
  const alt = isDarkMode ? "Logo Dark" : "Logo Light";

  return (
    <StyledLogo>
      <Img src={src} alt={alt} />
    </StyledLogo>
  );
};
