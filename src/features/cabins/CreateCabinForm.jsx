import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import { useForm } from "react-hook-form";
import FormRow from "../../ui/FormRow";
import { useCreateCabin } from "./useCreateCabin";
import { useEditCabin } from "./useEditCabin";

function CreateCabinForm({ EditFileInfo, onCloseModal }) {
  const { id: editId, ...EditFile } = EditFileInfo ? EditFileInfo : {};
  const isEdit = Boolean(editId);

  const { register, handleSubmit, reset, getValues, formState } = useForm({
    defaultValues: isEdit ? EditFile : {},
  });

  const { errors } = formState;
  function onErrors(errors) {
    console.log(errors);
  }

  const { isEditing, editCabin } = useEditCabin();
  const { isCreating, createCabin } = useCreateCabin();
  const isWorking = isCreating || isEditing;

  function onSubmit(data) {
    const image = typeof data.image === "string" ? data.image : data.image[0];

    if (isEdit) {
      editCabin([{ ...data, image }, editId], {
        onSuccess() {
          reset();
          onCloseModal?.();
        },
      });
    } else {
      createCabin(
        { ...data, image },
        {
          onSuccess() {
            reset();
            onCloseModal?.();
          },
        }
      );
    }
  }

  return (
    <Form
      onSubmit={handleSubmit(onSubmit, onErrors)}
      type={onCloseModal ? "modal" : "regular"}
    >
      <FormRow label='Cabin Name' error={errors?.name?.message}>
        <Input
          type='text'
          id='name'
          disabled={isWorking}
          {...register("name", {
            required: "Cabin name must be filled",
          })}
        />
      </FormRow>

      <FormRow label='Maximum capacity' error={errors?.maxCapacity?.message}>
        <Input
          type='number'
          id='maxCapacity'
          disabled={isWorking}
          {...register("maxCapacity", {
            required: "Capacity must to be filled",
            min: {
              value: 1,
              message: "Minimum capacity is 1",
            },
          })}
        />
      </FormRow>

      <FormRow label='Regular price' error={errors?.regularPrice?.message}>
        <Input
          type='number'
          id='regularPrice'
          disabled={isWorking}
          {...register("regularPrice", {
            required: "Price must to be filled",
            min: {
              value: 1,
              message: "Minimum price is 1",
            },
          })}
        />
      </FormRow>

      <FormRow label='Discount' error={errors?.discount?.message}>
        <Input
          type='number'
          id='discount'
          disabled={isWorking}
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
        label='Description for website'
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

      <FormRow label='Cabin Photo' error={errors?.image?.message}>
        <FileInput
          id='image'
          accept='image/*'
          disabled={isWorking}
          {...register("image", {
            required: isEdit ? false : "Photo must be attached",
          })}
        />
      </FormRow>

      <FormRow>
        <Button
          disabled={isWorking}
          variations='secondary'
          type='reset'
          onClick={() => onCloseModal?.()}
        >
          Cancel
        </Button>
        <Button disabled={isWorking}>
          {isEdit ? "Submit Changes" : "Create Cabin"}
        </Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;
