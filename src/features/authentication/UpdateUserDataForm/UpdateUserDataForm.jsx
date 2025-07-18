import { useState } from "react";

import { Button } from "../../../ui/Button";
import { FileInput } from "../../../ui/FileInput";
import { Form } from "../../../ui/Form";
import { FormRow } from "../../../ui/FormRow";
import { Input } from "../../../ui/Input";
import { useUpdateUser } from "../useUpdateUser";
import { useUser } from "../useUser";

export const UpdateUserDataForm = () => {
	const {
		user: {
			email,
			user_metadata: { fullName: currentFullName },
		},
	} = useUser();

	const { updateUser, isUpdating } = useUpdateUser();

	const [fullName, setFullName] = useState(currentFullName);
	const [avatar, setAvatar] = useState(null);

	function handleSubmit(e) {
		e.preventDefault();
		updateUser(
			{
				fullName,
				avatar,
			},
			{
				onSuccess: () => {
					setFullName(currentFullName);
					setAvatar(null);
				},
			},
		);
	}

	function handleReset() {
		setFullName(currentFullName);
		setAvatar(null);
	}

	return (
		<Form onSubmit={handleSubmit}>
			<FormRow label="Email address">
				<Input value={email} disabled />
			</FormRow>
			<FormRow label="Full name">
				<Input
					type="text"
					value={fullName}
					onChange={(e) => setFullName(e.target.value)}
					id="fullName"
					disabled={isUpdating}
				/>
			</FormRow>
			<FormRow label="Avatar image">
				<FileInput
					id="avatar"
					accept="image/*"
					onChange={(e) => setAvatar(e.target.files[0])}
					disabled={isUpdating}
				/>
			</FormRow>
			<FormRow>
				<Button
					disabled={isUpdating}
					onClick={handleReset}
					type="reset"
					variations="secondary"
				>
					Cancel
				</Button>
				<Button disabled={isUpdating}>Update account</Button>
			</FormRow>
		</Form>
	);
};
