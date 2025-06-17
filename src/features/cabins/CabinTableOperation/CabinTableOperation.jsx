import Filter from "../../../ui/Filter";
import { SortBy } from "../../../ui/SortBy";
import TableOperations from "../../../ui/TableOperations";
import { CABIN_FILTER_OPTIONS, CABIN_SORT_OPTIONS } from "./constants";

export const CabinTableOperation = () => {
  return (
    <TableOperations>
      <Filter options={CABIN_FILTER_OPTIONS} filterName='discount' />
      <SortBy options={CABIN_SORT_OPTIONS} />
    </TableOperations>
  );
};
