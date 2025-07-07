import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { getBookings, BookingFilter, BookingSortBy, BookingWithRelations } from "../../services/apiBookings";
import { PAGE_SIZE } from "../../utils/constants";

interface UseBookingsReturn {
	error: Error | null;
	isLoading: boolean;
	bookings: BookingWithRelations[] | undefined;
	count: number | null | undefined;
	page: number;
}

export function useBookings(): UseBookingsReturn {
	const [searchParams] = useSearchParams();
	const queryClient = useQueryClient();

	const filterValue = searchParams.get("status");
	const filter: BookingFilter | null =
		!filterValue || filterValue === "all"
			? null
			: {
					field: "status",
					value: filterValue,
				};

	const sortByRaw = searchParams.get("sort") || "startDate-desc";
	const [field, direction] = sortByRaw.split("-");
	const sortBy: BookingSortBy = { field, direction: direction as "asc" | "desc" };

	const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

	const {
		error,
		isLoading,
		data: { data: bookings, count } = {},
	} = useQuery({
		queryKey: ["bookings", filterValue, sortBy, page],
		queryFn: () => getBookings({ filter, sortBy, page }),
	});

	const pageCount = Math.ceil((count || 0) / PAGE_SIZE);

	if (page < pageCount)
		queryClient.prefetchQuery({
			queryKey: ["bookings", filterValue, sortBy, page + 1],
			queryFn: () => getBookings({ filter, sortBy, page: page + 1 }),
		});

	if (page > 1)
		queryClient.prefetchQuery({
			queryKey: ["bookings", filterValue, sortBy, page - 1],
			queryFn: () => getBookings({ filter, sortBy, page: page - 1 }),
		});

	return { error, isLoading, bookings, count, page };
}
