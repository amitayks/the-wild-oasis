import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { logout as logoutApi } from "../../services/apiAuth";

interface UseLogoutReturn {
	isLoading: boolean;
	logout: () => void;
}

export function useLogout(): UseLogoutReturn {
	const navigate = useNavigate();
	const queryClient = useQueryClient();

	const { isLoading, mutate: logout } = useMutation({
		mutationFn: logoutApi,
		onSuccess: () => {
			queryClient.removeQueries();
			navigate("/login", { replace: true });
		},
	});

	return { isLoading, logout };
}
