import { memo, useCallback, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { Select } from "../Select";

export const SortBy = memo(({ options }) => {
	const [searchParams, setSearchParams] = useSearchParams();
	const currentValue = useMemo(
		() => searchParams.get("sort") || options.at(0).value,
		[searchParams, options],
	);

	const handleChange = useCallback(
		(e) => {
			searchParams.set("sort", e.target.value);
			setSearchParams(searchParams);
		},
		[searchParams, setSearchParams],
	);

	return (
		<Select
			options={options}
			type="whit"
			value={currentValue}
			onChange={handleChange}
		/>
	);
});

SortBy.displayName = "SortBy";
