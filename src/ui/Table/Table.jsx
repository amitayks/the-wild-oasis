import { createContext, useContext } from "react";

import {
  Empty,
  Footer,
  StyledBody,
  StyledHeader,
  StyledRow,
  StyledTable,
} from "./Table.styled";

const TableContext = createContext();
export const Table = ({ columns, children }) => {
  return (
    <TableContext.Provider value={{ columns }}>
      <StyledTable role="table">{children}</StyledTable>
    </TableContext.Provider>
  );
};

const Header = ({ children }) => {
  const { columns } = useContext(TableContext);

  return (
    <StyledHeader role="row" columns={columns} as="header">
      {children}
    </StyledHeader>
  );
};
const Row = ({ children }) => {
  const { columns } = useContext(TableContext);

  return (
    <StyledRow role="row" columns={columns}>
      {children}
    </StyledRow>
  );
};
const Body = ({ data, render }) => {
  if (!data?.length) {
    return <Empty>there is no data</Empty>;
  }

  return <StyledBody>{data.map(render)}</StyledBody>;
};

Table.Header = Header;
Table.Row = Row;
Table.Body = Body;
Table.Footer = Footer;
