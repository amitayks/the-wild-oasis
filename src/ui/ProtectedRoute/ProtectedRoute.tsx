import { useEffect, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../features/authentication/useUser";

import { Spinner } from "../Spinner";
import { FullPage } from "./ProtectedRoute.styled";

interface ProtectedRouteProps {
	children: ReactNode;
}

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
	const navigate = useNavigate();
	const { isLoading, isAuthenticated } = useUser();

	useEffect(() => {
		if (!isAuthenticated && !isLoading) navigate("/login");
	}, [isAuthenticated, isLoading, navigate]);

	if (isLoading)
		return (
			<FullPage>
				<Spinner />
			</FullPage>
		);

	if (isAuthenticated) return children;
};
