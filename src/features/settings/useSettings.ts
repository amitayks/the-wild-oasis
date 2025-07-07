import { useQuery } from "@tanstack/react-query";
import { getSettings, Settings } from "../../services/apiSettings";

interface UseSettingsReturn {
	error: Error | null;
	isLoading: boolean;
	settings: Settings | undefined;
}

export function useSettings(): UseSettingsReturn {
	const {
		error,
		isLoading,
		data: settings,
	} = useQuery({
		queryKey: ["settings"],
		queryFn: getSettings,
	});

	return { error, isLoading, settings };
}
