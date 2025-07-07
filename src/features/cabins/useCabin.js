import { useQuery } from "@tanstack/react-query";
import { getCabins } from "../../services/apiCabins";

export function useCabin() {
	const {
		error,
		isLoading,
		data: cabins,
	} = useQuery({
		queryKey: ["cabins"],
		queryFn: getCabins,
	});

	return { error, isLoading, cabins };
}
