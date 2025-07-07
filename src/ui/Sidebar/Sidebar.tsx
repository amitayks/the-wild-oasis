import { Logo } from "../Logo";
import { MainNav } from "../MainNav";
import { StyledSidebar } from "./Sidebar.styled";

export const Sidebar = () => {
	return (
		<StyledSidebar>
			<Logo />
			<MainNav />
			{/* <Uploader /> */}
		</StyledSidebar>
	);
};
