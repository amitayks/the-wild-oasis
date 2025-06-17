import { Box, StyledPageNotFound } from "./PageNotFound.styled";

import { useMoveBack } from "../../hooks/useMoveBack";
import { Heading } from "../../ui/Heading";

const PageNotFound = () => {
  const moveBack = useMoveBack();

  return (
    <StyledPageNotFound>
      <Box>
        <Heading as='h1'>
          The page you are looking for could not be found 😢
        </Heading>
        <button onClick={moveBack} size='large'>
          &larr; Go back
        </button>
      </Box>
    </StyledPageNotFound>
  );
};

export default PageNotFound;
