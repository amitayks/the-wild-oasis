import { memo } from "react";

export const Empty = memo(({ resourceName }) => {
  return <p>No {resourceName} could be found.</p>;
});

Empty.displayName = "Empty";
