import { useForm } from "react-hook-form";
import { Button } from "../../../ui/Button";
import { FileInput } from "../../../ui/FileInput";
import { Form } from "../../../ui/Form";
import { FormRow } from "../../../ui/FormRow";
import { Input } from "../../../ui/Input";
import { Textarea } from "../../../ui/Textarea";

import { useCreateCabin } from "../useCreateCabin";
import { useEditCabin } from "../useEditCabin";

export const CreateCabinForm = ({ EditFileInfo, onCloseModal }) => {
	const { isCreating, createCabin } = useCreateCabin();
	const { isEditing, editCabin } = useEditCabin();
	const isWorking = isCreating || isEditing;

	const { id: editId, ...editValues } = EditFileInfo || {};
	const isEditSession = Boolean(editId);

	console.log("CreateCabinForm", editValues);

	const { register, handleSubmit, reset, getValues, formState } = useForm({
		defaultValues: isEditSession
			? editValues
			: {
					name: "sdvSV",
					maxCapacity: 1,
					regularPrice: 1,
					discount: 0,
					description: "",
					image: "",
				},
		mode: "onBlur",
	});
	const { errors } = formState;

	function onSubmit(data) {
		const image = typeof data.image === "string" ? data.image : data.image[0];

		if (isEditSession)
			editCabin(
				{ newCabinData: { ...data, image }, id: editId },
				{
					onSuccess: (_data) => {
						reset();
						onCloseModal?.();
					},
				},
			);
		else
			createCabin(
				{ ...data, image: image },
				{
					onSuccess: (_data) => {
						reset();
						onCloseModal?.();
					},
				},
			);
	}

	function onError(_errors) {
		console.log(errors);
	}

	return (
		<Form
			key={editId || "new"}
			onSubmit={handleSubmit(onSubmit, onError)}
			type={onCloseModal ? "modal" : "regular"}
		>
			<FormRow label="Cabin name" error={errors?.name?.message}>
				<span>Cabin Name</span>
				<Input
					type="text"
					id="name"
					disabled={isWorking}
					{...register("name", {
						required: "This field is required",
					})}
				/>
			</FormRow>

			<FormRow label="Maximum capacity" error={errors?.maxCapacity?.message}>
				<span>Maximum capacity</span>
				<Input
					type="number"
					id="maxCapacity"
					disabled={isWorking}
					{...register("maxCapacity", {
						required: "This field is required",
						min: {
							value: 1,
							message: "Capacity should be at least 1",
						},
					})}
				/>
			</FormRow>

			<FormRow label="Regular price" error={errors?.regularPrice?.message}>
				<span>Regular price</span>
				<Input
					type="number"
					id="regularPrice"
					disabled={isWorking}
					{...register("regularPrice", {
						required: "This field is required",
						min: {
							value: 1,
							message: "Capacity should be at least 1",
						},
					})}
				/>
			</FormRow>

			<FormRow label="Discount" error={errors?.discount?.message}>
				<span>Discount</span>

				<Input
					type="number"
					id="discount"
					disabled={isWorking}
					{...register("discount", {
						required: "This field is required",
						validate: (value) =>
							value <= getValues().regularPrice ||
							"Discount should be less than regular price",
					})}
				/>
			</FormRow>

			<FormRow
				label="Description for website"
				error={errors?.description?.message}
			>
				<span>Description for website</span>
				<Textarea
					type="number"
					id="description"
					disabled={isWorking}
					{...register("description", {
						required: "This field is required",
					})}
				/>
			</FormRow>

			<FormRow label="Cabin photo">
				<span>Cabin photo</span>
				<FileInput
					id="image"
					accept="image/*"
					{...register("image", {
						required: isEditSession ? false : "This field is required",
					})}
				/>
			</FormRow>

			<FormRow>
				{/* type is an HTML attribute! */}
				<Button type="reset" onClick={() => onCloseModal?.()}>
					Cancel
				</Button>
				<Button disabled={isWorking}>
					{isEditSession ? "Edit cabin" : "Create new cabin"}
				</Button>
			</FormRow>
		</Form>
	);
};
