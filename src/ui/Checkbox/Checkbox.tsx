import { ReactNode, ChangeEvent } from "react";
import { StyledCheckbox } from "./Checkbox.styled";

interface CheckboxProps {
	checked: boolean;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
	disabled?: boolean;
	id: string;
	children: ReactNode;
}

export const Checkbox = ({
	checked,
	onChange,
	disabled = false,
	id,
	children,
}: CheckboxProps) => {
	return (
		<StyledCheckbox>
			<input
				type="checkbox"
				id={id}
				checked={checked}
				onChange={onChange}
				disabled={disabled}
			/>
			<label htmlFor={!disabled ? id : ""}>{children}</label>
		</StyledCheckbox>
	);
};
