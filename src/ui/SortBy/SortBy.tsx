import { memo, useCallback, useMemo, ChangeEvent } from "react";
import { useSearchParams } from "react-router-dom";
import { Select } from "../Select";

interface SortOption {
	value: string;
	label: string;
}

interface SortByProps {
	options: SortOption[];
}

export const SortBy = memo(({ options }: SortByProps) => {
	const [searchParams, setSearchParams] = useSearchParams();
	const currentValue = useMemo(
		() => searchParams.get("sort") || options.at(0)?.value || "",
		[searchParams, options],
	);

	const handleChange = useCallback(
		(e: ChangeEvent<HTMLSelectElement>) => {
			searchParams.set("sort", e.target.value);
			setSearchParams(searchParams);
		},
		[searchParams, setSearchParams],
	);

	return (
		<Select
			options={options}
			value={currentValue}
			onChange={handleChange}
		/>
	);
});

SortBy.displayName = "SortBy";
