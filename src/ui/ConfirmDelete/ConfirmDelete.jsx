import Button from "../Button";
import Heading from "../Heading";
import { StyledConfirmDelete } from "./styled";

function ConfirmDelete({ resourceName, onConfirm, disabled, onCloseModal }) {
  return (
    <StyledConfirmDelete>
      <Heading as='h3'>Delete {resourceName}</Heading>
      <p>
        Are you sure you want to delete this {resourceName} permanently? This
        action cannot be undone.
      </p>

      <div>
        <Button
          onClick={() => onCloseModal?.()}
          variations='secondary'
          disabled={disabled}
        >
          Cancel
        </Button>
        <Button onClick={onConfirm} variations='danger' disabled={disabled}>
          Delete
        </Button>
      </div>
    </StyledConfirmDelete>
  );
}

export default ConfirmDelete;
