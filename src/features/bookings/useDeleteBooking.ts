import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteBooking } from "../../services/apiBookings";

interface UseDeleteBookingReturn {
	deletingBooking: (bookingId: number) => void;
	isDeleting: boolean;
}

export const useDeleteBooking = (): UseDeleteBookingReturn => {
	const queryClient = useQueryClient();

	const { mutate: deletingBooking, isLoading: isDeleting } = useMutation({
		mutationFn: (bookingId: number) => deleteBooking(bookingId),
		onSuccess: () => {
			toast.success("Booking sucessfuly deleted");
			queryClient.invalidateQueries({ queryKey: ["bookings"] });
		},
		onError: (err: Error) => toast.error(err.message),
	});
	return { deletingBooking, isDeleting };
};
