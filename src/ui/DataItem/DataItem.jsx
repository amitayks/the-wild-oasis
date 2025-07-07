import { Label } from "recharts";
import { StyledDataItem } from "./DataItem.styled";

export const DataItem = ({ icon, label, children }) => {
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
