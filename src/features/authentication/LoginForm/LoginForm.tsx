import React, { useState } from "react";
import { Button } from "../../../ui/Button";
import { Form } from "../../../ui/Form";
import { FormRowVertical } from "../../../ui/FormRowVertical";
import { Input } from "../../../ui/Input";
import { SpinnerMini } from "../../../ui/SpinnerMini";
import { useLogin } from "../useLogin";

export const LoginForm: React.FC = () => {
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const { login, isLoading } = useLogin();

	if (isLoading) return <SpinnerMini />;

	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		if (!email || !password) return;

		login({ email, password });
		setPassword("");
		setEmail("");
	}

	return (
		<Form onSubmit={handleSubmit}>
			<FormRowVertical label="Email address">
				<Input
					type="email"
					id="email"
					autoComplete="username"
					value={email}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
					disabled={isLoading}
				/>
			</FormRowVertical>
			<FormRowVertical label="Password">
				<Input
					type="password"
					id="password"
					autoComplete="current-password"
					value={password}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
					disabled={isLoading}
				/>
			</FormRowVertical>
			<FormRowVertical>
				<Button size="large" type="submit">
					{!isLoading ? "Login" : <SpinnerMini />}
				</Button>
			</FormRowVertical>
		</Form>
	);
};
