import { memo } from "react";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";
import { useDarkMode } from "../../context/useDarkMode";
import { ButtonIcon } from "../ButtonIcon";

export const DarkModeTuggle = memo(() => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <ButtonIcon onClick={toggleDarkMode} aria-label="Toggle dark mode">
      {isDarkMode ? <HiOutlineSun /> : <HiOutlineMoon />}
    </ButtonIcon>
  );
});

DarkModeTuggle.displayName = "DarkModeTuggle";
