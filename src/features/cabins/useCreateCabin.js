import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { addEditCabin } from "../../services/apiCabins";

export function useCreateCabin() {
	const queryClient = useQueryClient();
	const { isLoading: isCreating, mutate: createCabin } = useMutation({
		mutationFn: (newCabinData) => addEditCabin(newCabinData),
		onSuccess: () => {
			toast.success("Cabin add sucessfuly");
			queryClient.invalidateQueries({
				queryKey: ["cabins"],
			});
		},
		onError: (err) => toast.error(err.message),
	});

	return { isCreating, createCabin };
}
