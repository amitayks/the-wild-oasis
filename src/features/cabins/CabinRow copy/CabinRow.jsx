import { HiPencil, HiSquare2Stack, HiTrash } from "react-icons/hi2";
import ConfirmDelete from "../../../ui/ConfirmDelete";
import Menus from "../../../ui/Menus";
import Modal from "../../../ui/Modal";
import Table from "../../../ui/Table";
import { formatCurrency } from "../../../utils/helpers";
import { CreateCabinForm } from "../toChange/CreateCabinForm";
import { useCreateCabin } from "../useCreateCabin";
import { useDeleteCabin } from "../useDeleteCabin";

import { Cabin, Discount, Img, Price } from "./CabinRow.styled";
import { memo } from "react";

export const CabinRow = memo(({ cabin }) => {
  const { isDeleting, deleteCabin } = useDeleteCabin();
  const { isCreating, createCabin } = useCreateCabin();

  const isWorking = isCreating || isDeleting;

  const {
    id: cabinId,
    name,
    maxCapacity,
    regularPrice,
    discount,
    image,
    description,
  } = cabin;

  function handleDuplicate() {
    createCabin({
      name: `copy of ${name}`,
      maxCapacity,
      regularPrice,
      discount,
      image,
      description,
    });
  }

  return (
    <Table.Row>
      <Img src={image} />

      <Cabin>{name}</Cabin>

      <div>
        Fits up to <strong>{maxCapacity}</strong> guests
      </div>

      <Price>{formatCurrency(regularPrice)}</Price>

      {discount ? (
        <Discount>{formatCurrency(discount)}</Discount>
      ) : (
        <span>&mdash;</span>
      )}

      <div>
        <Modal>
          <Menus.Menu>
            <Menus.Toggle id={cabinId} />

            <Menus.List id={cabinId}>
              <Menus.Button icon={<HiSquare2Stack />} onClick={handleDuplicate}>
                Duplicate
              </Menus.Button>

              <Modal.Open opens='edit-cabin'>
                <Menus.Button icon={<HiPencil />}>Edit</Menus.Button>
              </Modal.Open>

              <Modal.Open opens='delete-cabin'>
                <Menus.Button icon={<HiTrash />}>Delete</Menus.Button>
              </Modal.Open>
            </Menus.List>

            <Modal.Window name='edit-cabin'>
              <CreateCabinForm EditFileInfo={cabin} />
            </Modal.Window>

            <Modal.Window name='delete-cabin'>
              <ConfirmDelete
                resourceName={`'Cabin ${name}'`}
                onConfirm={() => deleteCabin(cabinId)}
                disabled={isWorking}
              />
            </Modal.Window>
          </Menus.Menu>
        </Modal>
      </div>
    </Table.Row>
  );
});

CabinRow.displayName = "CabinRow";
