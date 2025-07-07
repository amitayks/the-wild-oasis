import { Logo } from "../Logo";
import { MainNav } from "../MainNav";
import { StyledMobileMenu } from "./MobileMenu.styled";

export const MobileMenu = ({ onCloseModal }) => {
	return (
		<StyledMobileMenu>
			<Logo />
			<MainNav onCloseModal={onCloseModal} />
		</StyledMobileMenu>
	);
};
