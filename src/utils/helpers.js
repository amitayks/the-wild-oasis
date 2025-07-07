import { differenceInDays, formatDistance, parseISO } from "date-fns";

export const subtractDates = (dateStr1, dateStr2) => {
  return differenceInDays(
    parseISO(String(dateStr1)),
    parseISO(String(dateStr2))
  );
};

export const formatDistanceFromNow = (dateStr) => {
  return formatDistance(parseISO(dateStr), new Date(), {
    addSuffix: true,
  })
    .replace("about ", "")
    .replace("in", "In");
};

export const getToday = (options = {}) => {
  const today = new Date();

  if (options?.end) {
    today.setUTCHours(23, 59, 59, 999);
  } else {
    today.setUTCHours(0, 0, 0, 0);
  }

  return today.toISOString();
};

export const formatCurrency = (value) => {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 1,
    maximumFractionDigits: 2,
  }).format(value);
};
