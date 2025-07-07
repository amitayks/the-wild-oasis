import { SelectHTMLAttributes, ChangeEvent } from "react";
import { StyledSelect } from "./Select.styled";

interface SelectOption {
	value: string;
	label: string;
}

interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'onChange'> {
	options: SelectOption[];
	value: string;
	onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

export const Select = ({ options, value, onChange, ...props }: SelectProps) => {
	return (
		<StyledSelect onChange={onChange} value={value} {...props}>
			{options.map((option) => (
				<option value={option.value} key={option.value}>
					{option.label}
				</option>
			))}
		</StyledSelect>
	);
};
