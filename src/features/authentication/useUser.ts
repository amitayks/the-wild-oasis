import { useQuery } from "@tanstack/react-query";
import { User } from "@supabase/supabase-js";
import { getCurrentUser } from "../../services/apiAuth";

interface UseUserReturn {
	isLoading: boolean;
	user: User | null | undefined;
	isAuthenticated: boolean;
}

export function useUser(): UseUserReturn {
	const { isLoading, data: user } = useQuery({
		queryKey: ["user"],
		queryFn: getCurrentUser,
	});

	return { isLoading, user, isAuthenticated: user?.role === "authenticated" };
}
