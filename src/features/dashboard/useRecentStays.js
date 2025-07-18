import { useQuery } from "@tanstack/react-query";
import { subDays } from "date-fns";
import { useSearchParams } from "react-router-dom";
import { getStaysAfterDate } from "../../services/apiBookings";

export function useRecentStays() {
	const [searchParams] = useSearchParams();
	const numDays = !searchParams.get("last")
		? 7
		: Number(searchParams.get("last"));
	const queryDays = subDays(new Date(), numDays).toISOString();

	const {
		data: stays,
		isLoading,
		isError,
	} = useQuery({
		queryKey: ["stays", `last-${numDays}`],
		queryFn: () => getStaysAfterDate(queryDays),
	});

	if (isError) throw new Error("Stays could not be loaded");

	const confirmStays = stays?.filter((stay) => {
		return stay.status === "checked-in" || stay.status === "checked-out";
	});

	return { stays, isLoading, confirmStays, numDays };
}
