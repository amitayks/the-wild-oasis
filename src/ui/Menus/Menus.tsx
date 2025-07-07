import { createContext, useContext, useState, ReactNode, ReactElement, MouseEvent } from "react";
import { createPortal } from "react-dom";
import { HiEllipsisVertical } from "react-icons/hi2";
import useClickOutside from "../../hooks/useClickOutside";
import { Menu, StyledButton, StyledList, StyledToggle } from "./Menus.styled";

interface Position {
	x: number;
	y: number;
}

interface MenusContextType {
	openId: string;
	open: (id: string) => void;
	close: () => void;
	position: Position;
	setPosition: (position: Position) => void;
}

const MenusContext = createContext<MenusContextType | null>(null);

interface MenusProps {
	children: ReactNode;
}

export const Menus = ({ children }: MenusProps) => {
	const [openId, setOpenId] = useState("");
	const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
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
};

interface ToggleProps {
	id: string;
}

function Toggle({ id }: ToggleProps) {
	const context = useContext(MenusContext);
	if (!context) throw new Error("Toggle must be used within a Menus");
	const { openId, open, close, setPosition } = context;

	function handleClick(e: MouseEvent<HTMLButtonElement>) {
		const rect = (e.target as HTMLElement).closest("button")!.getBoundingClientRect();

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

interface ListProps {
	children: ReactNode;
	id: string;
}

function List({ children, id }: ListProps) {
	const context = useContext(MenusContext);
	if (!context) throw new Error("List must be used within a Menus");
	const { openId, close, position } = context;

	const ref = useClickOutside(close, true);

	if (id !== openId) return null;

	return createPortal(
		<StyledList position={position} ref={ref}>
			{children}
		</StyledList>,
		document.body,
	);
}

interface ButtonProps {
	children: ReactNode;
	onClick?: () => void;
	icon?: ReactElement;
}

function Button({ children, onClick, icon }: ButtonProps) {
	const context = useContext(MenusContext);
	if (!context) throw new Error("Button must be used within a Menus");
	const { close } = context;

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
