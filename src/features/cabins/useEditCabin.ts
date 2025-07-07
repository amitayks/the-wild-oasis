import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { addEditCabin, CabinFormData } from "../../services/apiCabins";

interface EditCabinParams {
	newCabinData: Omit<CabinFormData, 'id'>;
	id: number;
}

interface UseEditCabinReturn {
	isEditing: boolean;
	editCabin: (params: EditCabinParams) => void;
}

export function useEditCabin(): UseEditCabinReturn {
	const queryClient = useQueryClient();

	const { isLoading: isEditing, mutate: editCabin } = useMutation({
		mutationFn: ({ newCabinData, id }: EditCabinParams) => addEditCabin({ ...newCabinData, id }),
		onSuccess: () => {
			toast.success("Cabin changed sucessfuly");
			queryClient.invalidateQueries({
				queryKey: ["cabins"],
			});
		},
		onError: (err: Error) => toast.error(err.message),
	});

	return { isEditing, editCabin };
}
