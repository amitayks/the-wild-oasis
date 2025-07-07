import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { updateBooking, BookingUpdate } from "../../services/apiBookings";

interface CheckinParams {
	bookingId: number;
	breakfast?: Partial<BookingUpdate>;
}

interface UseCheckinReturn {
	checkin: (params: CheckinParams) => void;
	isCheckingin: boolean;
}

export const useCheckin = (): UseCheckinReturn => {
	const queryClient = useQueryClient();
	const navigate = useNavigate();

	const { mutate: checkin, isLoading: isCheckingin } = useMutation({
		mutationFn: ({ bookingId, breakfast }: CheckinParams) =>
			updateBooking(bookingId, {
				status: "checked-in",
				isPaid: true,
				...breakfast,
			}),
		onSuccess: (data) => {
			toast.success(`Booking #${data.id} checked in sucessfuly`);
			queryClient.invalidateQueries({ active: true });
			navigate("/");
		},
		onError: (err: Error) => toast.error(err.message),
	});
	return { checkin, isCheckingin };
};
