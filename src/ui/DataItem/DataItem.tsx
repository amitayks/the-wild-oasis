import { ReactNode, ReactElement } from "react";
import { Label } from "recharts";
import { StyledDataItem } from "./DataItem.styled";

interface DataItemProps {
	icon?: ReactElement;
	label: string;
	children: ReactNode;
}

export const DataItem = ({ icon, label, children }: DataItemProps) => {
	return (
		<StyledDataItem>
			<Label>
				{icon}
				<span>{label}</span>
			</Label>
			{children}
		</StyledDataItem>
	);
};
