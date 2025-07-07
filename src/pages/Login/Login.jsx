import { LoginForm } from "../../features/authentication/LoginForm";
import { Heading } from "../../ui/Heading";
import { Logo } from "../../ui/Logo";
import { LoginLayout } from "./Login.styled";

const Login = () => {
	return (
		<LoginLayout>
			<Logo />
			<Heading as="h4">Log in to you account</Heading>
			<LoginForm />
		</LoginLayout>
	);
};
export default Login;
