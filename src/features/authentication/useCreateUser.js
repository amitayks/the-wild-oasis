import toast from "react-hot-toast";
import { signup as signupApi } from "../../services/apiAuth";
import { useMutation } from "@tanstack/react-query";

export function useCreateUser() {
  const { mutate: signup, isLoasing } = useMutation({
    mutationFn: signupApi,
    onSuccess: (user) => {
      console.log("User created successfully", user);
      toast.success("User created successfully");
    },
  });
  return { signup, isLoasing };
}
