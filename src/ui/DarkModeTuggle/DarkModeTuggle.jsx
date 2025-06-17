import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";
import { ButtonIcon } from "../ButtonIcon";
import { useDarkMode } from "../../context/useDarkMode";
import { memo } from "react";

export const DarkModeTuggle = memo(() => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <ButtonIcon onClick={toggleDarkMode} aria-label='Toggle dark mode'>
      {isDarkMode ? <HiOutlineSun /> : <HiOutlineMoon />}
    </ButtonIcon>
  );
});

DarkModeTuggle.displayName = "DarkModeTuggle";
