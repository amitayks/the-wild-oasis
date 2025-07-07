import { HiOutlineBars3 } from "react-icons/hi2";
import { UserAvatar } from "../../features/authentication/UserAvatar";
import { ButtonIcon } from "../ButtonIcon";
import { HeaderMenu } from "../HeaderMenu";
import { MobileMenu } from "../MobileMenu";
import { Modal } from "../Modal";
import { StyledHeader } from "./Header.styled";

export const Header = () => {
  return (
    <StyledHeader>
      <Modal>
        <Modal.Open opens="mobile-menu">
          <ButtonIcon className="mobile-menu-button">
            <HiOutlineBars3 />
          </ButtonIcon>
        </Modal.Open>

        <Modal.Window name="mobile-menu">
          <MobileMenu />
        </Modal.Window>
      </Modal>

      <UserAvatar />
      <HeaderMenu />
    </StyledHeader>
  );
};
