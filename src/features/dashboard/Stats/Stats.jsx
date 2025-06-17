import { HiOutlineBriefcase } from "react-icons/hi";
import {
  HiOutlineBanknotes,
  HiOutlineCalendarDateRange,
  HiOutlineChartBar,
} from "react-icons/hi2";
import { formatCurrency } from "../../../utils/helpers";
import Stat from "../Stat";
import { StyledStatsGrid } from "./Stats.styled";

export const Stats = ({ bookings, confirmStays, numDays, cabins }) => {
  const numBookings = bookings?.length;

  const numSales = bookings.reduce((acc, booking) => {
    return acc + booking.totalPrice + booking.extraPrice;
  }, 0);

  const numNights =
    confirmStays.reduce((acc, con) => {
      return acc + con.numNights;
    }, 0) /
    (numDays * cabins.length);

  return (
    <StyledStatsGrid>
      <Stat
        color='blue'
        title='Bookings'
        value={numBookings}
        icon={<HiOutlineBriefcase />}
      />
      <Stat
        color='green'
        title='Sales'
        value={formatCurrency(numSales)}
        icon={<HiOutlineBanknotes />}
      />
      <Stat
        color='indigo'
        title='Check Ins'
        value={confirmStays?.length}
        icon={<HiOutlineCalendarDateRange />}
      />
      <Stat
        color='yellow'
        title='Ocupancy Rate'
        value={Math.round(numNights * 100) + "%"}
        icon={<HiOutlineChartBar />}
      />
    </StyledStatsGrid>
  );
};
