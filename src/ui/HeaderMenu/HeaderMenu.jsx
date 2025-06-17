import { MdOutlineAccountCircle } from "react-icons/md";
import { useNavigate } from "react-router-dom";

import { Logout } from "../../features/authentication/Logout";
import { ButtonIcon } from "../ButtonIcon";
import { DarkModeTuggle } from "../DarkModeTuggle";
import { StyledHeaderMenu } from "./HeaderMenu.styled";

export const HeaderMenu = () => {
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
};
