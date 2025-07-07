import React, { useState } from "react";

import { Button } from "../../../ui/Button";
import { FileInput } from "../../../ui/FileInput";
import { Form } from "../../../ui/Form";
import { FormRow } from "../../../ui/FormRow";
import { Input } from "../../../ui/Input";
import { useUpdateUser } from "../useUpdateUser";
import { useUser } from "../useUser";

export const UpdateUserDataForm: React.FC = () => {
	const { user } = useUser();
	
	if (!user) return null;

	const {
		email,
		user_metadata: { fullName: currentFullName },
	} = user;

	const { updateUser, isUpdating } = useUpdateUser();

	const [fullName, setFullName] = useState<string>(currentFullName || "");
	const [avatar, setAvatar] = useState<File | null>(null);

	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		updateUser({ fullName, avatar });
		setFullName(currentFullName || "");
		setAvatar(null);
	}

	function handleReset() {
		setFullName(currentFullName || "");
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
					onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFullName(e.target.value)}
					id="fullName"
					disabled={isUpdating}
				/>
			</FormRow>
			<FormRow label="Avatar image">
				<FileInput
					id="avatar"
					accept="image/*"
					onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAvatar(e.target.files?.[0] || null)}
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
