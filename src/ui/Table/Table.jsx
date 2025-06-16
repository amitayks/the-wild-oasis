import { createContext, useContext } from "react";

import StyledHeader, { Footer } from "./styled";
import StyledTable from "./styled";
import StyledRow from "./styled";
import StyledBody from "./styled";
import Empty from "./styled";

const TableContext = createContext();
function Table({ columns, children }) {
  return (
    <TableContext.Provider value={{ columns }}>
      <StyledTable role='table'>{children}</StyledTable>
    </TableContext.Provider>
  );
}

function Header({ children }) {
  const { columns } = useContext(TableContext);

  return (
    <StyledHeader role='row' columns={columns} as='header'>
      {children}
    </StyledHeader>
  );
}
function Row({ children }) {
  const { columns } = useContext(TableContext);

  return (
    <StyledRow role='row' columns={columns}>
      {children}
    </StyledRow>
  );
}
function Body({ data, render }) {
  if (!data?.length) {
    return <Empty>there is no data</Empty>;
  }

  return <StyledBody>{data.map(render)}</StyledBody>;
}

Table.Header = Header;
Table.Row = Row;
Table.Body = Body;
Table.Footer = Footer;

export default Table;
