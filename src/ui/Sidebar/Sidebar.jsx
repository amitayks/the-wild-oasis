import Logo from "../Logo";
import MainNav from "../MainNav";
import { StyledSidebar } from "./styled";

function Sidebar() {
  return (
    <StyledSidebar>
      <Logo />
      <MainNav />
    </StyledSidebar>
  );
}

export default Sidebar;
