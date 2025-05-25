import Input from "../../../ui/Input";
import Form from "../../../ui/Form";
import Button from "../../../ui/Button";
import FileInput from "../../../ui/FileInput";
import Textarea from "../../../ui/Textarea";
import { useForm } from "react-hook-form";
import { addCabin } from "../../../services/apiCabins";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import FormRow from "../../../ui/FormRow";

function CreateCabinForm() {
  const { register, handleSubmit, reset, getValues, formState } = useForm();
  const { errors } = formState;
  console.log(errors);

  const queryClient = useQueryClient();
  const { isLoading, mutate } = useMutation({
    mutationFn: addCabin,
    onSuccess: () => {
      toast.success("Cabin add sucessfuly");
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
      reset();
    },
    onError: (err) => toast.error(err.message),
  });

  function onSubmit(data) {
    mutate({ ...data, image: data.image[0] });
  }

  function onErrors(errors) {
    console.log(errors);
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit, onErrors)}>
      <FormRow lable='Cabin Name' error={errors?.name?.message}>
        <Input
          type='text'
          id='name'
          {...register("name", {
            required: "Cabin name must be filled",
          })}
        />
      </FormRow>

      <FormRow lable='Maximum capacity' error={errors?.maxCapacity?.message}>
        <Input
          type='number'
          id='maxCapacity'
          {...register("maxCapacity", {
            required: "Capacity must to be filled",
            min: {
              value: 1,
              message: "Minimum capacity is 1",
            },
          })}
        />
      </FormRow>

      <FormRow lable='Regular price' error={errors?.regularPrice?.message}>
        <Input
          type='number'
          id='regularPrice'
          {...register("regularPrice", {
            required: "Price must to be filled",
            min: {
              value: 1,
              message: "Minimum price is 1",
            },
          })}
        />
      </FormRow>

      <FormRow lable='Discount' error={errors?.discount?.message}>
        <Input
          type='number'
          id='discount'
          defaultValue={0}
          {...register("discount", {
            required: "Discount must to be filled",
            validate: (value) =>
              value <= getValues().regularPrice ||
              "Discount has to be less from regular price",
          })}
        />
      </FormRow>

      <FormRow
        lable='Description for website'
        error={errors?.description?.message}
      >
        <Textarea
          type='number'
          id='description'
          defaultValue=''
          {...register("description", {
            required: "Desciption must to be filled",
          })}
        />
      </FormRow>

      <FormRow lable='Cbin Photo' error={errors?.image?.message}>
        <FileInput
          id='image'
          accept='image/*'
          {...register("image", { required: "Photo must be attached" })}
        />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button variations='secondary' type='reset'>
          Cancel
        </Button>
        <Button disabled={isLoading}>Create Cabin</Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;
