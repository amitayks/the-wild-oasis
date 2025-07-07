import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { addEditCabin, CabinFormData } from "../../services/apiCabins";

interface UseCreateCabinReturn {
	isCreating: boolean;
	createCabin: (newCabinData: CabinFormData) => void;
}

export function useCreateCabin(): UseCreateCabinReturn {
	const queryClient = useQueryClient();
	const { isLoading: isCreating, mutate: createCabin } = useMutation({
		mutationFn: (newCabinData: CabinFormData) => addEditCabin(newCabinData),
		onSuccess: () => {
			toast.success("Cabin add sucessfuly");
			queryClient.invalidateQueries({
				queryKey: ["cabins"],
			});
		},
		onError: (err: Error) => toast.error(err.message),
	});

	return { isCreating, createCabin };
}
