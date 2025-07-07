import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getBooking, BookingDetails } from "../../services/apiBookings";

interface UseBookingReturn {
	isLoading: boolean;
	error: Error | null;
	booking: BookingDetails | undefined;
}

export const useBooking = (): UseBookingReturn => {
	const { bookingId } = useParams<{ bookingId: string }>();

	const {
		error,
		isLoading,
		data: booking,
	} = useQuery({
		queryKey: ["booking", bookingId],
		queryFn: () => getBooking(Number(bookingId)),
		retry: false,
		enabled: !!bookingId,
	});

	return { isLoading, error, booking };
};
