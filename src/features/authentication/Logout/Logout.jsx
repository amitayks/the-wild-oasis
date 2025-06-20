import { HiArrowRightOnRectangle } from "react-icons/hi2";
import { ButtonIcon } from "../../../ui/ButtonIcon";
import { useLogout } from "../useLogout";
import { SpinnerMini } from "../../../ui/SpinnerMini";

export const Logout = () => {
  const { logout, isLoading } = useLogout();

  return (
    <ButtonIcon onClick={logout}>
      {!isLoading ? <HiArrowRightOnRectangle /> : <SpinnerMini />}
    </ButtonIcon>
  );
};
