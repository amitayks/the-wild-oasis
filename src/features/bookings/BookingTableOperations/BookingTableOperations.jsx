import { Filter } from "../../../ui/Filter";
import { SortBy } from "../../../ui/SortBy";
import { TableOperations } from "../../../ui/TableOperations";
import {
  BOOKING_FILTER_OPTIONS,
  BOOKING_SORT_OPTIONS,
} from "../../../utils/constans";

export const BookingTableOperations = () => {
  return (
    <TableOperations>
      <Filter filterName='status' options={BOOKING_FILTER_OPTIONS} />

      <SortBy options={BOOKING_SORT_OPTIONS} />
    </TableOperations>
  );
};
