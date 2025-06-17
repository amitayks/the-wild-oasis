import { Spinner } from "../../../ui/Spinner";
import { useCabin } from "../../cabins/useCabin";
import { TodayActivity } from "../../check-in-out/TodayActivity";
import { DurationChart } from "../DurationChart";
import { SalesChart } from "../SalesChart";
import { Stats } from "../Stats";
import { useRecentBooking } from "../useRecentBooking";
import { useRecentStays } from "../useRecentStays";
import { StyledDashboardLayout } from "./DashboardLayout.styled";

export const DashboardLayout = () => {
  const { bookings, isLoading } = useRecentBooking();
  const { isLoading: isLoadingStays, confirmStays, numDays } = useRecentStays();

  const { cabins, isLoading: loadingCabins } = useCabin();

  if (isLoading || isLoadingStays || loadingCabins) {
    return <Spinner />;
  }

  return (
    <StyledDashboardLayout>
      <Stats
        bookings={bookings}
        confirmStays={confirmStays}
        numDays={numDays}
        cabins={cabins}
      />
      <TodayActivity />
      <DurationChart confirmStays={confirmStays} />
      <SalesChart bookings={bookings} numDays={numDays} />
    </StyledDashboardLayout>
  );
};
