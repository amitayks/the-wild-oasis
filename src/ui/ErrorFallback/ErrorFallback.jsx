import GlobalStyle from "../../styles/GlobalStyle";
import { Box, StyledErrorFallback } from "./ErrorFallback.styled";

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <>
      <GlobalStyle />
      <StyledErrorFallback>
        <Box>
          <h1>Something went wrong</h1>
          <p>{error.message}</p>
          <button onClick={resetErrorBoundary}>Try again</button>
        </Box>
      </StyledErrorFallback>
    </>
  );
}

export default ErrorFallback;
