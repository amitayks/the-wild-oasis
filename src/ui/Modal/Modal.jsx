import { cloneElement, createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import { HiXMark } from "react-icons/hi2";
import useClickOutside from "../../hooks/useClickOutside";
import { Button, Overlay, StyledModal } from "./styled";

const ModalContext = createContext();

function Modal({ children }) {
  const [openModal, setOpenModal] = useState("");

  const close = () => setOpenModal("");
  const open = setOpenModal;

  return (
    <ModalContext.Provider value={{ openModal, close, open }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, opens: opensWindowName }) {
  const { open } = useContext(ModalContext);

  return cloneElement(children, { onClick: () => open(opensWindowName) });
}

function Window({ children, name }) {
  const { openModal, close } = useContext(ModalContext);
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
    document.body
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
