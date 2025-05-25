import { useNavigate } from "react-router-dom";
import { MdOutlineAccountCircle } from "react-icons/md";

import ButtonIcon from "./ButtonIcon";
import Logout from "../features/authentication/Logout";
import styled from "styled-components";
import DarkModeTuggle from "./DarkModeTuggle";

const StyledHeaderMenu = styled.ul`
  display: flex;
  gap: 2.4rem;
`;

function HeaderMenu() {
  const navigate = useNavigate();

  return (
    <StyledHeaderMenu>
      <li>
        <ButtonIcon onClick={() => navigate("/account")}>
          <MdOutlineAccountCircle />
        </ButtonIcon>
      </li>
      <li>
        <DarkModeTuggle />
      </li>
      <li>
        <Logout />
      </li>
    </StyledHeaderMenu>
  );
}

export default HeaderMenu;
