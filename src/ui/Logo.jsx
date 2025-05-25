import styled from "styled-components";
import { useDarkMode } from "../context/useDarkMode";

const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  height: 9.6rem;
  width: auto;
`;

function Logo() {
  const { isDarkMode } = useDarkMode();
  const src = isDarkMode ? "/logo-dark.png" : "/logo-light.png";
  const alt = isDarkMode ? "Logo Dark" : "Logo Light";

  return (
    <StyledLogo>
      <Img src={src} alt={alt} />
    </StyledLogo>
  );
}

export default Logo;
