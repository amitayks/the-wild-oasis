import { createContext, useContext, ReactNode, ReactElement } from "react";

import {
	Empty,
	Footer,
	StyledBody,
	StyledHeader,
	StyledRow,
	StyledTable,
} from "./Table.styled";

interface TableContextType {
	columns: string;
}

const TableContext = createContext<TableContextType | null>(null);

interface TableProps {
	columns: string;
	children: ReactNode;
}

export const Table = ({ columns, children }: TableProps) => {
	return (
		<TableContext.Provider value={{ columns }}>
			<StyledTable role="table">{children}</StyledTable>
		</TableContext.Provider>
	);
};

interface HeaderProps {
	children: ReactNode;
}

const Header = ({ children }: HeaderProps) => {
	const context = useContext(TableContext);
	if (!context) throw new Error("Header must be used within a Table");
	const { columns } = context;

	return (
		<StyledHeader role="row" columns={columns} as="header">
			{children}
		</StyledHeader>
	);
};

interface RowProps {
	children: ReactNode;
}

const Row = ({ children }: RowProps) => {
	const context = useContext(TableContext);
	if (!context) throw new Error("Row must be used within a Table");
	const { columns } = context;

	return (
		<StyledRow role="row" columns={columns}>
			{children}
		</StyledRow>
	);
};

interface BodyProps<T> {
	data: T[];
	render: (item: T) => ReactElement;
}

const Body = <T,>({ data, render }: BodyProps<T>) => {
	if (!data?.length) {
		return <Empty>there is no data</Empty>;
	}

	return <StyledBody>{data.map(render)}</StyledBody>;
};

Table.Header = Header;
Table.Row = Row;
Table.Body = Body;
Table.Footer = Footer;
