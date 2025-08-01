import { Empty } from "../../../ui/Empty";
import { Menus } from "../../../ui/Menus";
import { Pagination } from "../../../ui/Pagination";
import { Spinner } from "../../../ui/Spinner";
import { Table } from "../../../ui/Table";
import { BookingRow } from "../BookingRow";
import { useBookings } from "../useBookings";

export const BookingTable = () => {
	const { bookings, isLoading, count, page } = useBookings();

	if (!bookings?.length) return <Empty resourceName="bookings" />;
	if (isLoading) return <Spinner />;

	return (
		<Menus>
			<Table columns="0.6fr 2fr 2.4fr 1.4fr 1fr 3.2rem">
				<Table.Header>
					<div>Cabin</div>
					<div>Guest</div>
					<div>Dates</div>
					<div>Status</div>
					<div>Amount</div>
					<div />
				</Table.Header>

				<Table.Body
					data={bookings}
					render={(booking) => (
						<BookingRow key={booking.id} booking={booking} />
					)}
				/>
				<Table.Footer>
					<Pagination count={count} currentPage={page} />
				</Table.Footer>
			</Table>
		</Menus>
	);
};
