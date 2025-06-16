import UserAvatar from "../../features/authentication/UserAvatar";
import HeaderMenu from "../HeaderMenu";
import { StyledHeader } from "./styled";

function Header() {
  return (
    <StyledHeader>
      <UserAvatar />
      <HeaderMenu />
    </StyledHeader>
  );
}

export default Header;
