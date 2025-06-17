import { StyledCheckbox } from "./Checkbox.styled";

export const Checkbox = ({
  checked,
  onChange,
  disabled = false,
  id,
  children,
}) => {
  return (
    <StyledCheckbox>
      <input
        type='checkbox'
        id={id}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
      />
      <label htmlFor={!disabled ? id : ""}>{children}</label>
    </StyledCheckbox>
  );
};
