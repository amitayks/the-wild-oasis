import React from "react";
import { useForm } from "react-hook-form";

import { Button } from "../../../ui/Button";
import { Form } from "../../../ui/Form";
import { FormRow } from "../../../ui/FormRow";
import { Input } from "../../../ui/Input";

import { useCreateUser } from "../useCreateUser";

interface SignupFormData {
	fullName: string;
	email: string;
	password: string;
	passwordConfirm: string;
}

export const SignupForm: React.FC = () => {
	const { signup, isLoading } = useCreateUser();

	const {
		register,
		handleSubmit,
		watch,
		reset,
		formState: { errors },
	} = useForm<SignupFormData>();

	function onSubmit({ fullName, email, password }: SignupFormData) {
		signup({ fullName, email, password });
		reset();
	}

	return (
		<Form onSubmit={handleSubmit(onSubmit)}>
			<FormRow label="Full name" error={errors.fullName?.message}>
				<p>Full name</p>
				<Input
					type="text"
					id="fullName"
					disabled={isLoading}
					{...register("fullName", {
						required: "Full name is required",
						minLength: {
							value: 3,
							message: "Full name must be at least 3 characters long",
						},
					})}
				/>
			</FormRow>

			<FormRow label="Email address" error={errors.email?.message}>
				<p>Email</p>
				<Input
					type="email"
					id="email"
					disabled={isLoading}
					{...register("email", {
						required: "Email is required",
						pattern: {
							value: /\S+@\S+\.\S+/,
							message: "Email address is not valid",
						},
					})}
				/>
			</FormRow>

			<FormRow
				label="Password (min 8 characters)"
				error={errors.password?.message}
			>
				<p>Password</p>

				<Input
					type="password"
					id="password"
					disabled={isLoading}
					{...register("password", {
						required: "Password is required",
						minLength: {
							value: 8,
							message: "Password must be at least 8 characters long",
						},
					})}
				/>
			</FormRow>

			<FormRow label="Repeat password" error={errors.passwordConfirm?.message}>
				<p>Repeat Password</p>

				<Input
					type="password"
					id="passwordConfirm"
					disabled={isLoading}
					{...register("passwordConfirm", {
						required: "Password confirmation is required",
						validate: (value: string) => {
							if (value !== watch("password")) {
								return "Passwords do not match";
							}
						},
					})}
				/>
			</FormRow>

			<FormRow>
				<Button disabled={isLoading} variations="secondary" type="reset">
					Cancel
				</Button>
				<Button disabled={isLoading}>Create new user</Button>
			</FormRow>
		</Form>
	);
};
