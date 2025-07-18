import { format, isToday } from "date-fns";
import { memo } from "react";
import { HiEye } from "react-icons/hi";
import {
	HiArrowDownOnSquareStack,
	HiArrowUpOnSquare,
	HiTrash,
} from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import { ConfirmDelete } from "../../../ui/ConfirmDelete";
import { Menus } from "../../../ui/Menus";
import { Modal } from "../../../ui/Modal";
import { Table } from "../../../ui/Table";
import { Tag } from "../../../ui/Tag";
import { formatCurrency, formatDistanceFromNow } from "../../../utils/helpers";
import { useCheckout } from "../../check-in-out/useCheckout";
import { useDeleteBooking } from "../useDeleteBooking";
import { Amount, Cabin, Stacked } from "./BookingRow.styled";

export const BookingRow = memo(
	({
		booking: {
			id: bookingId,
			startDate,
			endDate,
			numNights,
			totalPrice,
			status,
			guests: { fullName: guestName, email },
			cabins: { name: cabinName },
		},
	}) => {
		const navigate = useNavigate();
		const { checkout, isCheckedout } = useCheckout();
		const { deletingBooking, isDeleting } = useDeleteBooking();

		const statusToTagName = {
			unconfirmed: "blue",
			"checked-in": "green",
			"checked-out": "silver",
		};

		return (
			<Table.Row>
				<Cabin>{cabinName}</Cabin>

				<Stacked>
					<span>{guestName}</span>
					<span>{email}</span>
				</Stacked>

				<Stacked>
					<span>
						{isToday(new Date(startDate))
							? "Today"
							: formatDistanceFromNow(startDate)}{" "}
						&rarr; {numNights} night stay
					</span>
					<span>
						{format(new Date(startDate), "MMM dd yyyy")} &mdash;{" "}
						{format(new Date(endDate), "MMM dd yyyy")}
					</span>
				</Stacked>

				<Tag type={statusToTagName[status]}>{status.replace("-", " ")}</Tag>

				<Amount>{formatCurrency(totalPrice)}</Amount>

				<Modal>
					<Menus.Menu>
						<Menus.Toggle id={bookingId} />
						<Menus.List id={bookingId}>
							<Menus.Button
								icon={<HiEye />}
								onClick={() => navigate(`/bookings/${bookingId}`)}
							>
								See Details
							</Menus.Button>

							{status === "unconfirmed" && (
								<Menus.Button
									icon={<HiArrowDownOnSquareStack />}
									onClick={() => navigate(`/checkin/${bookingId}`)}
								>
									Check In
								</Menus.Button>
							)}

							{status === "checked-in" && (
								<Menus.Button
									icon={<HiArrowUpOnSquare />}
									onClick={() => checkout(bookingId)}
									disabled={isCheckedout}
								>
									Check Out
								</Menus.Button>
							)}

							<Modal.Open opens="delete-booking">
								<Menus.Button icon={<HiTrash />}>delete Booking</Menus.Button>
							</Modal.Open>
						</Menus.List>
					</Menus.Menu>

					<Modal.Window name="delete-booking">
						<ConfirmDelete
							resourceName={`'Booking #${bookingId}'`}
							onConfirm={() => deletingBooking(bookingId)}
							disabled={isDeleting}
						/>
					</Modal.Window>
				</Modal>
			</Table.Row>
		);
	},
);
BookingRow.displayName = "BookingDetail";
