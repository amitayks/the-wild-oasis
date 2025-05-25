import { useSearchParams } from "react-router-dom";
import Select from "./Select";

function SortBy({ options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentValue = searchParams.get("sort") || options.at(0).value;

  function handleChange(e) {
    searchParams.set("sort", e.target.value);
    setSearchParams(searchParams);
  }

  return (
    <Select
      options={options}
      type='whit'
      value={currentValue}
      onChange={handleChange}
    />
  );
}

export default SortBy;
