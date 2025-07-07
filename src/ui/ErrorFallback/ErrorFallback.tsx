import GlobalStyle from "../../styles/GlobalStyle";
import { Box, StyledErrorFallback } from "./ErrorFallback.styled";

interface ErrorFallbackProps {
	error: Error;
	resetErrorBoundary: () => void;
}

export const ErrorFallback = ({ error, resetErrorBoundary }: ErrorFallbackProps) => {
	return (
		<>
			<GlobalStyle />
			<StyledErrorFallback>
				<Box>
					<h1>Something went wrong</h1>
					<p>{error.message}</p>
					<button type="button" onClick={resetErrorBoundary}>
						Try again
					</button>
				</Box>
			</StyledErrorFallback>
		</>
	);
};
