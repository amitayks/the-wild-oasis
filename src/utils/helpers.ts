import { differenceInDays, formatDistance, parseISO } from "date-fns";

export interface GetTodayOptions {
	end?: boolean;
}

export const subtractDates = (dateStr1: string, dateStr2: string): number => {
	return differenceInDays(
		parseISO(String(dateStr1)),
		parseISO(String(dateStr2)),
	);
};

export const formatDistanceFromNow = (dateStr: string): string => {
	return formatDistance(parseISO(dateStr), new Date(), {
		addSuffix: true,
	})
		.replace("about ", "")
		.replace("in", "In");
};

export const getToday = (options: GetTodayOptions = {}): string => {
	const today = new Date();

	if (options?.end) {
		today.setUTCHours(23, 59, 59, 999);
	} else {
		today.setUTCHours(0, 0, 0, 0);
	}

	return today.toISOString();
};

export const formatCurrency = (value: number): string => {
	return new Intl.NumberFormat("en", {
		style: "currency",
		currency: "USD",
		minimumFractionDigits: 1,
		maximumFractionDigits: 2,
	}).format(value);
};
