import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { login as loginApi, LoginCredentials } from "../../services/apiAuth";

interface UseLoginReturn {
	isLoading: boolean;
	login: (credentials: LoginCredentials) => void;
}

export function useLogin(): UseLoginReturn {
	const queryClient = useQueryClient();
	const navigate = useNavigate();

	const { isLoading, mutate: login } = useMutation({
		mutationFn: ({ email, password }: LoginCredentials) => loginApi({ email, password }),
		onSuccess: (user) => {
			queryClient.setQueryData(["user"], user.user);
			toast.success("login sucessfuly");
			navigate("/dashboard", { replace: true });
		},
		onError: (_err) => {
			toast.error("Provided email or password are incorrect");
		},
	});

	return { login, isLoading };
}
