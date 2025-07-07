import React from "react";
import { HiArrowRightOnRectangle } from "react-icons/hi2";
import { ButtonIcon } from "../../../ui/ButtonIcon";
import { SpinnerMini } from "../../../ui/SpinnerMini";
import { useLogout } from "../useLogout";

export const Logout: React.FC = () => {
	const { logout, isLoading } = useLogout();

	return (
		<ButtonIcon onClick={logout}>
			{!isLoading ? <HiArrowRightOnRectangle /> : <SpinnerMini />}
		</ButtonIcon>
	);
};
