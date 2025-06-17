import { StyledSelect } from "./Select.styled";

function Select({ options, value, onChange, ...props }) {
  return (
    <StyledSelect onChange={onChange} value={value} {...props}>
      {options.map((option) => (
        <option value={option.value} key={option.value}>
          {option.label}
        </option>
      ))}
    </StyledSelect>
  );
}

export default Select;
