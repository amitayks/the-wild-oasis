import { useSearchParams } from "react-router-dom";
import { FilterButton, StyledFilter } from "./Filter.styled";

export const Filter = ({ options, filterName }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentValue = searchParams.get(filterName) || options?.[0]?.value;

  function handleClick(value) {
    if (searchParams.get("page")) {
      searchParams.set("page", 1);
    }
    searchParams.set(filterName, value);
    setSearchParams(searchParams);
  }

  return (
    <StyledFilter>
      {options.map((fil, i) => {
        return (
          <FilterButton
            onClick={() => handleClick(fil.value)}
            key={i}
            active={fil.value === currentValue}
            disabled={fil.value === currentValue}
          >
            {fil.label}
          </FilterButton>
        );
      })}
    </StyledFilter>
  );
};
