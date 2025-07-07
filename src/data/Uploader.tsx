import { isFuture, isPast, isToday } from "date-fns";
import { useState } from "react";
import supabase from "../services/supabase";
import { Button } from "../ui/Button";
import { subtractDates } from "../utils/helpers";

import { bookings } from "./data-bookings";
import { cabins } from "./data-cabins";
import { guests } from "./data-guests";

// const originalSettings = {
//   minBookingLength: 3,
//   maxBookingLength: 30,
//   maxGuestsPerBooking: 10,
//   breakfastPrice: 15,
// };

interface DatabaseRow {
	id: number;
}

interface BookingData {
	cabinId: number;
	guestId: number;
	startDate: string;
	endDate: string;
	hasBreakfast: boolean;
	numGuests: number;
	[key: string]: any;
}

interface ProcessedBooking extends BookingData {
	numNights: number;
	cabinPrice: number;
	extraPrice: number;
	totalPrice: number;
	status: string;
}

async function deleteGuests(): Promise<void> {
	const { error } = await supabase.from("guests").delete().gt("id", 0);
	if (error) console.log(error.message);
}

async function deleteCabins(): Promise<void> {
	const { error } = await supabase.from("cabins").delete().gt("id", 0);
	if (error) console.log(error.message);
}

async function deleteBookings(): Promise<void> {
	const { error } = await supabase.from("bookings").delete().gt("id", 0);
	if (error) console.log(error.message);
}

async function createGuests(): Promise<void> {
	const { error } = await supabase.from("guests").insert(guests);
	if (error) console.log(error.message);
}

async function createCabins(): Promise<void> {
	const { error } = await supabase.from("cabins").insert(cabins);
	if (error) console.log(error.message);
}

async function createBookings(): Promise<void> {
	// Bookings need a guestId and a cabinId. We can't tell Supabase IDs for each object, it will calculate them on its own. So it might be different for different people, especially after multiple uploads. Therefore, we need to first get all guestIds and cabinIds, and then replace the original IDs in the booking data with the actual ones from the DB
	const { data: guestsIds } = await supabase
		.from("guests")
		.select("id")
		.order("id");
	const allGuestIds = guestsIds?.map((guest: DatabaseRow) => guest.id) || [];
	const { data: cabinsIds } = await supabase
		.from("cabins")
		.select("id")
		.order("id");
	const allCabinIds = cabinsIds?.map((cabin: DatabaseRow) => cabin.id) || [];

	const finalBookings: ProcessedBooking[] = bookings.map((booking: BookingData) => {
		// Here relying on the order of cabins, as they don't have and ID yet
		const cabin = cabins.at(booking.cabinId - 1);
		if (!cabin) {
			throw new Error(`Cabin not found for cabinId: ${booking.cabinId}`);
		}
		const numNights = subtractDates(booking.endDate, booking.startDate);
		const cabinPrice = numNights * (cabin.regularPrice - cabin.discount);
		const extraPrice = booking.hasBreakfast
			? numNights * 15 * booking.numGuests
			: 0; // hardcoded breakfast price
		const totalPrice = cabinPrice + extraPrice;

		let status: string;
		if (
			isPast(new Date(booking.endDate)) &&
			!isToday(new Date(booking.endDate))
		)
			status = "checked-out";
		else if (
			isFuture(new Date(booking.startDate)) ||
			isToday(new Date(booking.startDate))
		)
			status = "unconfirmed";
		else if (
			(isFuture(new Date(booking.endDate)) ||
				isToday(new Date(booking.endDate))) &&
			isPast(new Date(booking.startDate)) &&
			!isToday(new Date(booking.startDate))
		)
			status = "checked-in";
		else
			status = "unconfirmed";

		return {
			...booking,
			numNights,
			cabinPrice,
			extraPrice,
			totalPrice,
			guestId: allGuestIds.at(booking.guestId - 1) || 0,
			cabinId: allCabinIds.at(booking.cabinId - 1) || 0,
			status,
		};
	});

	console.log(finalBookings);

	const { error } = await supabase.from("bookings").insert(finalBookings);
	if (error) console.log(error.message);
}

function Uploader(): JSX.Element {
	const [isLoading, setIsLoading] = useState<boolean>(false);

	async function uploadAll(): Promise<void> {
		setIsLoading(true);
		// Bookings need to be deleted FIRST
		await deleteBookings();
		await deleteGuests();
		await deleteCabins();

		// Bookings need to be created LAST
		await createGuests();
		await createCabins();
		await createBookings();

		setIsLoading(false);
	}

	async function uploadBookings(): Promise<void> {
		setIsLoading(true);
		await deleteBookings();
		await createBookings();
		setIsLoading(false);
	}

	return (
		<div
			style={{
				marginTop: "auto",
				backgroundColor: "#e0e7ff",
				padding: "8px",
				borderRadius: "5px",
				textAlign: "center",
				display: "flex",
				flexDirection: "column",
				gap: "8px",
			}}
		>
			<h3>SAMPLE DATA</h3>

			<Button onClick={uploadAll} disabled={isLoading}>
				Upload ALL
			</Button>

			<Button onClick={uploadBookings} disabled={isLoading}>
				Upload bookings ONLY
			</Button>
		</div>
	);
}

export default Uploader;
