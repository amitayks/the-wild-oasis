import { memo } from "react";

interface EmptyProps {
	resourceName: string;
}

export const Empty = memo(({ resourceName }: EmptyProps) => {
	return <p>No {resourceName} could be found.</p>;
});

Empty.displayName = "Empty";
