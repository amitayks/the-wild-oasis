import {
  HiOutlineCalendarDays,
  HiOutlineCog6Tooth,
  HiOutlineHome,
  HiOutlineHomeModern,
  HiOutlineUsers,
} from "react-icons/hi2";
import { NavList, StyledNavLink } from "./styled";

function MainNav() {
  return (
    <nav>
      <NavList>
        <il>
          <StyledNavLink to='/dashboard'>
            <HiOutlineHome />
            <span>Home</span>
          </StyledNavLink>
        </il>
        <il>
          <StyledNavLink to='/bookings'>
            <HiOutlineCalendarDays />
            <span>Bookings</span>
          </StyledNavLink>
        </il>
        <il>
          <StyledNavLink to='/cabins'>
            <HiOutlineHomeModern />
            <span>Cabins</span>
          </StyledNavLink>
        </il>
        <il>
          <StyledNavLink to='/users'>
            <HiOutlineUsers />
            <span>Users</span>
          </StyledNavLink>
        </il>
        <il>
          <StyledNavLink to='/settings'>
            <HiOutlineCog6Tooth />
            <span>Settings</span>
          </StyledNavLink>
        </il>
      </NavList>
    </nav>
  );
}

export default MainNav;
