import { useNavigate } from "react-router-dom";
import { useMoveBack } from "../../../hooks/useMoveBack";
import { Button } from "../../../ui/Button";
import { ButtonGroup } from "../../../ui/ButtonGroup";
import { ButtonText } from "../../../ui/ButtonText";
import { ConfirmDelete } from "../../../ui/ConfirmDelete";
import { Empty } from "../../../ui/Empty";
import { Heading } from "../../../ui/Heading";
import { Modal } from "../../../ui/Modal";
import { Row } from "../../../ui/Row";
import { Spinner } from "../../../ui/Spinner";
import { Tag } from "../../../ui/Tag";
import { useCheckout } from "../../check-in-out/useCheckout";
import { BookingDataBox } from "../BookingDataBox";
import { useBooking } from "../useBooking";
import { useDeleteBooking } from "../useDeleteBooking";
import { HeadingGroup } from "./BookingDetail.styled";

export const BookingDetail = () => {
	const navigate = useNavigate();
	const moveBack = useMoveBack();
	const { booking, isLoading } = useBooking();
	const { checkout, isCheckedout } = useCheckout();
	const { deletingBooking, isDeleting } = useDeleteBooking();

	if (isLoading) return <Spinner />;
	if (!booking) return <Empty resourceName="booking" />;

	const statusToTagName = {
		unconfirmed: "blue",
		"checked-in": "green",
		"checked-out": "silver",
	};

	return (
		<>
			<Row type="horizontal">
				<HeadingGroup>
					<Heading as="h1">Booking #{booking.id}</Heading>
					<Tag type={statusToTagName[booking.status]}>
						{booking.status.replace("-", " ")}
					</Tag>
				</HeadingGroup>
				<ButtonText onClick={moveBack}>&larr; Back</ButtonText>
			</Row>

			<BookingDataBox booking={booking} />

			<ButtonGroup>
				{booking.status === "unconfirmed" && (
					<Button onClick={() => navigate(`/checkin/${booking.id}`)}>
						Check-in
					</Button>
				)}

				{booking.status === "checked-in" && (
					<Button onClick={() => checkout(booking.id)} disabled={isCheckedout}>
						Check Out
					</Button>
				)}

				<Modal>
					<Modal.Open opens="delete-booking">
						<Button variations="danger">delete Booking</Button>
					</Modal.Open>

					<Modal.Window name="delete-booking">
						<ConfirmDelete
							resourceName={`'Booking #${booking.id}'`}
							onConfirm={() =>
								deletingBooking(booking.id, {
									onSettled: () => navigate(-1),
								})
							}
							disabled={isDeleting}
						/>
					</Modal.Window>
				</Modal>

				<Button variations="secondary" onClick={moveBack}>
					Back
				</Button>
			</ButtonGroup>
		</>
	);
};
