import { PAGE_SIZE } from "../utils/constants";
import { getToday } from "../utils/helpers";
import supabase, { Database } from "./supabase";

// Booking types
export type Booking = Database['public']['Tables']['bookings']['Row'];
export type BookingInsert = Database['public']['Tables']['bookings']['Insert'];
export type BookingUpdate = Database['public']['Tables']['bookings']['Update'];

export type Cabin = Database['public']['Tables']['cabins']['Row'];
export type Guest = Database['public']['Tables']['guests']['Row'];

export interface BookingWithRelations {
	id: number;
	created_at: string;
	startDate: string;
	endDate: string;
	numNights: number;
	numGuests: number;
	status: string;
	totalPrice: number;
	cabins: Pick<Cabin, 'name'>;
	guests: Pick<Guest, 'fullName' | 'email'>;
}

export interface BookingDetails extends Booking {
	cabins: Cabin;
	guests: Guest;
}

export interface BookingFilter {
	field: string;
	value: string;
}

export interface BookingSortBy {
	field: string;
	direction: 'asc' | 'desc';
}

export interface GetBookingsParams {
	filter?: BookingFilter;
	sortBy?: BookingSortBy;
	page?: number;
}

export interface GetBookingsResult {
	data: BookingWithRelations[];
	count: number | null;
	page?: number;
}

export interface BookingAfterDate {
	created_at: string;
	totalPrice: number;
	extraPrice: number;
}

export interface StayAfterDate extends Booking {
	guests: Pick<Guest, 'fullName'>;
}

export interface TodayActivity extends Booking {
	guests: Pick<Guest, 'fullName' | 'nationality' | 'countryFlag'>;
}

export async function getBookings({ filter, sortBy, page }: GetBookingsParams): Promise<GetBookingsResult> {
	let query = supabase
		.from("bookings")
		.select(
			"id, created_at, startDate, endDate, numNights, numGuests, status, totalPrice, cabins(name), guests(fullName, email)",
			{ count: "exact" },
		);

	if (filter) query = query.eq(filter.field, filter.value);
	if (sortBy)
		query = query.order(sortBy.field, {
			ascending: sortBy.direction === "asc",
		});

	if (page) {
		const from = (page - 1) * PAGE_SIZE;
		const to = from + PAGE_SIZE - 1;

		query = query.range(from, to);
	}

	const { data, error, count } = await query;

	if (error) {
		console.error(error);
		throw new Error("Booking not found");
	}

	return { data: data as any as BookingWithRelations[], count, page };
}

export async function getBooking(id: number): Promise<BookingDetails> {
	const { data, error } = await supabase
		.from("bookings")
		.select("*, cabins(*), guests(*)")
		.eq("id", id)
		.single();

	if (error) {
		console.error(error);
		throw new Error("Booking not found");
	}

	return data as any as BookingDetails;
}

export async function getBookingsAfterDate(date: string): Promise<BookingAfterDate[]> {
	const { data, error } = await supabase
		.from("bookings")
		.select("created_at, totalPrice, extraPrice")
		.gte("created_at", date)
		.lte("created_at", getToday({ end: true }));

	if (error) {
		console.error(error);
		throw new Error("Bookings could not get loaded");
	}

	return data as any as BookingAfterDate[];
}

export async function getStaysAfterDate(date: string): Promise<StayAfterDate[]> {
	const { data, error } = await supabase
		.from("bookings")
		// .select('*')
		.select("*, guests(fullName)")
		.gte("startDate", date)
		.lte("startDate", getToday());

	if (error) {
		console.error(error);
		throw new Error("Bookings could not get loaded");
	}

	return data as any as StayAfterDate[];
}

export async function getStaysTodayActivity(): Promise<TodayActivity[]> {
	const { data, error } = await supabase
		.from("bookings")
		.select("*, guests(fullName, nationality, countryFlag)")
		.or(
			`and(status.eq.unconfirmed,startDate.eq.${getToday()}),and(status.eq.checked-in,endDate.eq.${getToday()})`,
		)
		.order("created_at");

	if (error) {
		console.error(error);
		throw new Error("Bookings could not get loaded");
	}
	return data as any as TodayActivity[];
}

export async function updateBooking(id: number, obj: BookingUpdate): Promise<Booking> {
	const { data, error } = await supabase
		.from("bookings")
		.update(obj)
		.eq("id", id)
		.select()
		.single();

	if (error) {
		console.error(error);
		throw new Error("Booking could not be updated");
	}
	return data;
}

export async function deleteBooking(id: number): Promise<null> {
	const { data, error } = await supabase.from("bookings").delete().eq("id", id);

	if (error) {
		console.error(error);
		throw new Error("Booking could not be deleted");
	}
	return data;
}
