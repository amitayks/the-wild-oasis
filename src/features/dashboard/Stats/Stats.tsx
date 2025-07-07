import { useMemo } from "react";
import { STAT_ICONS } from "../../../utils/constants";
import { formatCurrency } from "../../../utils/helpers";
import { Stat } from "../Stat";
import { StyledStatsGrid } from "./Stats.styled";

export const Stats = ({ bookings, confirmStays, numDays, cabins }) => {
	// ✅ Memoize expensive calculations
	const numBookings = useMemo(() => bookings?.length || 0, [bookings]);

	const numSales = useMemo(
		() =>
			bookings.reduce(
				(acc, booking) => acc + booking.totalPrice + booking.extraPrice,
				0,
			),
		[bookings],
	);

	const occupancyRate = useMemo(() => {
		const numNights = confirmStays.reduce(
			(acc, stay) => acc + stay.numNights,
			0,
		);
		return Math.round((numNights / (numDays * cabins.length)) * 100);
	}, [confirmStays, numDays, cabins]);

	const formattedSales = useMemo(() => formatCurrency(numSales), [numSales]);

	return (
		<StyledStatsGrid>
			<Stat
				color="blue"
				title="Bookings"
				value={numBookings}
				icon={STAT_ICONS.bookings}
			/>
			<Stat
				color="green"
				title="Sales"
				value={formattedSales}
				icon={STAT_ICONS.sales}
			/>
			<Stat
				color="indigo"
				title="Check Ins"
				value={confirmStays?.length}
				icon={STAT_ICONS.checkins}
			/>
			<Stat
				color="yellow"
				title="Occupancy Rate"
				value={`${occupancyRate}%`}
				icon={STAT_ICONS.occupancy}
			/>
		</StyledStatsGrid>
	);
};
