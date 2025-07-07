import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteBooking } from "../../services/apiBookings";

export const useDeleteBooking = () => {
	const queryClient = useQueryClient();

	const { mutate: deletingBooking, isLoading: isDeleting } = useMutation({
		mutationFn: (bookingId) => deleteBooking(bookingId),
		onSuccess: () => {
			toast.success("Booking sucessfuly deleted");
			queryClient.invalidateQueries({ queryKey: ["bookings"] });
		},
		onError: (err) => toast.error(err.message),
	});
	return { deletingBooking, isDeleting };
};
