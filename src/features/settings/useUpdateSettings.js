import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateSetting as updateSettingsApi } from "../../services/apiSettings";

export function useUpdateSettings() {
	const queryClient = useQueryClient();

	const { isLoading: isUpdating, mutate: updateSettings } = useMutation({
		mutationFn: updateSettingsApi,
		onSuccess: () => {
			toast.success("Settings updated sucessfuly");
			queryClient.invalidateQueries({
				queryKey: ["settings"],
			});
		},
		onError: (err) => toast.error(err.message),
	});

	return { isUpdating, updateSettings };
}
