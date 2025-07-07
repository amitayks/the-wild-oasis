import { cloneElement, createContext, useContext, useState, ReactNode, ReactElement } from "react";
import { createPortal } from "react-dom";
import { HiXMark } from "react-icons/hi2";
import useClickOutside from "../../hooks/useClickOutside";
import { Button, Overlay, StyledModal } from "./Modal.styled";

interface ModalContextType {
	openModal: string;
	close: () => void;
	open: (name: string) => void;
}

const ModalContext = createContext<ModalContextType | null>(null);

interface ModalProps {
	children: ReactNode;
}

export const Modal = ({ children }: ModalProps) => {
	const [openModal, setOpenModal] = useState("");

	const close = () => setOpenModal("");
	const open = setOpenModal;

	return (
		<ModalContext.Provider value={{ openModal, close, open }}>
			{children}
		</ModalContext.Provider>
	);
};

interface OpenProps {
	children: ReactElement;
	opens: string;
}

function Open({ children, opens: opensWindowName }: OpenProps) {
	const context = useContext(ModalContext);
	if (!context) throw new Error("Open must be used within a Modal");
	const { open } = context;

	return cloneElement(children, { onClick: () => open(opensWindowName) });
}

interface WindowProps {
	children: ReactElement;
	name: string;
}

function Window({ children, name }: WindowProps) {
	const context = useContext(ModalContext);
	if (!context) throw new Error("Window must be used within a Modal");
	const { openModal, close } = context;
	const ref = useClickOutside(close);

	if (name !== openModal) return null;

	return createPortal(
		<Overlay>
			<StyledModal ref={ref}>
				<Button onClick={close}>
					<HiXMark />
				</Button>

				<div>{cloneElement(children, { onCloseModal: close })}</div>
			</StyledModal>
		</Overlay>,
		document.body,
	);
}

Modal.Open = Open;
Modal.Window = Window;
