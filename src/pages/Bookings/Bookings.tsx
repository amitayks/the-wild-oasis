import React from "react";
import { BookingTable } from "../../features/bookings/BookingTable/BookingTable";
import { BookingTableOperations } from "../../features/bookings/BookingTableOperations";
import { Heading } from "../../ui/Heading";
import { Row } from "../../ui/Row";

const Bookings: React.FC = () => {
	return (
		<>
			<Row type="horizontal">
				<Heading as="h1">All bookings</Heading>
				<BookingTableOperations />
			</Row>

			<BookingTable />
		</>
	);
};
export default Bookings;
