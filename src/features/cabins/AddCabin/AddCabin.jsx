import { Button } from "../../../ui/Button";
import { Modal } from "../../../ui/Modal";
import { CreateCabinForm } from "../CreateCabinForm";

export const AddCabin = () => {
	return (
		<div>
			<Modal>
				<Modal.Open opens="cabin-form">
					<Button>Add new cabin</Button>
				</Modal.Open>

				<Modal.Window name="cabin-form">
					<CreateCabinForm />
				</Modal.Window>
			</Modal>
		</div>
	);
};
