import { Logo } from "../Logo";
import { MainNav } from "../MainNav";
import { StyledMobileMenu } from "./MobileMenu.styled";

interface MobileMenuProps {
	onCloseModal?: () => void;
}

export const MobileMenu = ({ onCloseModal }: MobileMenuProps) => {
	return (
		<StyledMobileMenu>
			<Logo />
			<MainNav onCloseModal={onCloseModal} />
		</StyledMobileMenu>
	);
};
