import styled from "styled-components";
import { useRecentBooking } from "./useRecentBooking";
import { useRecentStays } from "./useRecentStays";
import Stats from "./Stats";
import Spinner from "../../ui/Spinner";
import { useCabin } from "../cabins/useCabin";
import SalesChart from "./SalesChart";
import DurationChart from "./DurationChart";
import TodayActivity from "../check-in-out/TodayActivity";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

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
