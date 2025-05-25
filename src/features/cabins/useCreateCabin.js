import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addEditCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";

export function useCreateCabin() {
  const queryClient = useQueryClient();
  //  creating cabin
  const { isLoading: isCreating, mutate: createCabin } = useMutation({
    mutationFn: addEditCabin,
    onSuccess: () => {
      toast.success("Cabin add sucessfuly");
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isCreating, createCabin };
}
