import Logo from "../Logo";
import MainNav from "../MainNav";
import { StyledSidebar } from "./Sidebar.styled";

function Sidebar() {
  return (
    <StyledSidebar>
      <Logo />
      <MainNav />
    </StyledSidebar>
  );
}

export default Sidebar;
