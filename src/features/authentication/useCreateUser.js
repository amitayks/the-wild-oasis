import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { signup as signupApi } from "../../services/apiAuth";

export function useCreateUser() {
  const { mutate: signup, isLoasing } = useMutation({
    mutationFn: signupApi,
    onSuccess: (user) => {
      toast.success(`User created successfully`);
    },
  });
  return { signup, isLoasing };
}
