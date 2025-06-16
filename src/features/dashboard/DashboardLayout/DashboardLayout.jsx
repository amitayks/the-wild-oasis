import styled from "styled-components";
import { useRecentBooking } from "../useRecentBooking";
import { useRecentStays } from "../useRecentStays";
import Stats from "../Stats";
import Spinner from "../../../ui/Spinner";
import { useCabin } from "../../cabins/useCabin";
import SalesChart from "../SalesChart";
import DurationChart from "../DurationChart";
import TodayActivity from "../../check-in-out/TodayActivity";
import { StyledDashboardLayout } from "./styled";

function DashboardLayout() {
  const { bookings, isLoading } = useRecentBooking();
  const { isLoading: isLoadingStays, confirmStays, numDays } = useRecentStays();

  const { cabins, isLoading: loadingCabins } = useCabin();

  if (isLoading || isLoadingStays || loadingCabins) {
    return <Spinner />;
  }

  return (
    <StyledDashboardLayout>
      <>
        <Stats
          bookings={bookings}
          confirmStays={confirmStays}
          numDays={numDays}
          cabins={cabins}
        />
      </>
      <TodayActivity />
      <DurationChart confirmStays={confirmStays} />
      <SalesChart bookings={bookings} numDays={numDays} />
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;
