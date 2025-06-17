import {
  HiOutlineCalendarDays,
  HiOutlineCog6Tooth,
  HiOutlineHome,
  HiOutlineHomeModern,
  HiOutlineUsers,
} from "react-icons/hi2";
import { NavList, StyledNavLink } from "./MainNav.styled";

export const MainNav = ({ onCloseModal }) => {
  const handleLinkClick = () => {
    // Close modal when a link is clicked (only in mobile menu)
    if (onCloseModal) {
      onCloseModal();
    }
  };

  return (
    <nav>
      <NavList>
        <li>
          <StyledNavLink to='/dashboard' onClick={handleLinkClick}>
            <HiOutlineHome />
            <span>Home</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to='/bookings' onClick={handleLinkClick}>
            <HiOutlineCalendarDays />
            <span>Bookings</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to='/cabins' onClick={handleLinkClick}>
            <HiOutlineHomeModern />
            <span>Cabins</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to='/users' onClick={handleLinkClick}>
            <HiOutlineUsers />
            <span>Users</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to='/settings' onClick={handleLinkClick}>
            <HiOutlineCog6Tooth />
            <span>Settings</span>
          </StyledNavLink>
        </li>
      </NavList>
    </nav>
  );
};
