import Logo from "../Logo";
import MainNav from "../MainNav";
import { StyledMobileMenu } from "./styled";

function MobileMenu({ onCloseModal }) {
  return (
    <StyledMobileMenu>
      <Logo />
      <MainNav onCloseModal={onCloseModal} />
    </StyledMobileMenu>
  );
}

export default MobileMenu;
