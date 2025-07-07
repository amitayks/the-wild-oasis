import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateCurrentUser, UpdateUserData } from "../../services/apiAuth";

interface UseUpdateUserReturn {
	isUpdating: boolean;
	updateUser: (data: UpdateUserData) => void;
}

export function useUpdateUser(): UseUpdateUserReturn {
	const queryClient = useQueryClient();

	const { isLoading: isUpdating, mutate: updateUser } = useMutation({
		mutationFn: updateCurrentUser,
		onSuccess: () => {
			toast.success("user updated sucessfuly");
			queryClient.invalidateQueries({
				queryKey: ["user"],
			});
		},
		onError: (err: Error) => toast.error(err.message),
	});

	return { isUpdating, updateUser };
}
