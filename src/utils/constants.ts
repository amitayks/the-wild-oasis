import { IconType } from "react-icons";
import { HiOutlineBriefcase, HiOutlineChartBar } from "react-icons/hi";
import {
	HiOutlineBanknotes,
	HiOutlineCalendarDateRange,
} from "react-icons/hi2";

export const PAGE_SIZE = 5;

export interface FilterOption {
	value: string;
	label: string;
}

export interface SortOption {
	value: string;
	label: string;
}

export interface StatIconsType {
	bookings: IconType;
	sales: IconType;
	checkins: IconType;
	occupancy: IconType;
}

export const CABIN_FILTER_OPTIONS: FilterOption[] = [
	{ value: "all", label: "All" },
	{ value: "no-discount", label: "No Discount" },
	{ value: "with-discount", label: "With Discount" },
	// { value: "3", label: "capacity" },
];

export const CABIN_SORT_OPTIONS: SortOption[] = [
	{ value: "name-asc", label: "Sort by name (A-Z)" },
	{ value: "name-desc", label: "Sort by name (Z-A)" },
	{ value: "regularPrice-asc", label: "Sort by price (low first)" },
	{ value: "regularPrice-desc", label: "Sort by price (high first)" },
	{ value: "maxCapacity-asc", label: "Sort by capacity (low first)" },
	{ value: "maxCapacity-desc", label: "Sort by capacity (high first)" },
];

export const BOOKING_FILTER_OPTIONS: FilterOption[] = [
	{ value: "all", label: "All" },
	{ value: "checked-out", label: "Checked out" },
	{ value: "checked-in", label: "Checked in" },
	{ value: "unconfirmed", label: "Unconfirmed" },
];

export const BOOKING_SORT_OPTIONS: SortOption[] = [
	{ value: "startDate-desc", label: "Sort by date (recent first)" },
	{ value: "startDate-asc", label: "Sort by date (earlier first)" },
	{
		value: "totalPrice-desc",
		label: "Sort by amount (high first)",
	},
	{ value: "totalPrice-asc", label: "Sort by amount (low first)" },
];

export const STAT_ICONS: StatIconsType = {
	bookings: HiOutlineBriefcase,
	sales: HiOutlineBanknotes,
	checkins: HiOutlineCalendarDateRange,
	occupancy: HiOutlineChartBar,
};
