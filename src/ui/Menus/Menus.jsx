import { createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import { HiEllipsisVertical } from "react-icons/hi2";
import useClickOutside from "../../hooks/useClickOutside";
import { Menu, StyledButton, StyledList, StyledToggle } from "./styled";

const MenusContext = createContext();

function Menus({ children }) {
  const [openId, setOpenId] = useState("");
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const close = () => setOpenId("");
  const open = setOpenId;

  return (
    <MenusContext.Provider
      value={{
        openId,
        open,
        close,
        position,
        setPosition,
      }}
    >
      <div>{children}</div>
    </MenusContext.Provider>
  );
}

function Toggle({ id }) {
  const { openId, open, close, setPosition } = useContext(MenusContext);

  function handleClick(e) {
    const rect = e.target.closest("button").getBoundingClientRect();

    setPosition({
      x: window.innerWidth - rect.width - rect.x,
      y: rect.y + rect.height + 8,
    });

    openId === "" || openId !== id ? open(id) : close();
  }

  return (
    <StyledToggle onClick={handleClick}>
      <HiEllipsisVertical />
    </StyledToggle>
  );
}

function List({ children, id }) {
  const { openId, close, position } = useContext(MenusContext);

  const ref = useClickOutside(close, true);

  if (id !== openId) return null;

  return createPortal(
    <StyledList position={position} ref={ref}>
      {children}
    </StyledList>,
    document.body
  );
}

function Button({ children, onClick, icon }) {
  const { close } = useContext(MenusContext);

  function handleClick() {
    onClick?.();
    close();
  }
  return (
    <li>
      <StyledButton onClick={handleClick}>
        {icon} <span>{children}</span>
      </StyledButton>
    </li>
  );
}

Menus.Menu = Menu;
Menus.Toggle = Toggle;
Menus.List = List;
Menus.Button = Button;

export default Menus;
