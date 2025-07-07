import { useQuery } from "@tanstack/react-query";
import { getCabins, Cabin } from "../../services/apiCabins";

interface UseCabinReturn {
	error: Error | null;
	isLoading: boolean;
	cabins: Cabin[] | undefined;
}

export function useCabin(): UseCabinReturn {
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
