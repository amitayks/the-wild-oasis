import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { signup as signupApi, SignupCredentials } from "../../services/apiAuth";

interface UseCreateUserReturn {
	signup: (credentials: SignupCredentials) => void;
	isLoading: boolean;
}

export function useCreateUser(): UseCreateUserReturn {
	const { mutate: signup, isLoading } = useMutation({
		mutationFn: signupApi,
		onSuccess: (_user) => {
			toast.success("User created successfully");
		},
	});
	return { signup, isLoading };
}
