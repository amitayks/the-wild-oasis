import styled from "styled-components";
import BookingDataBox from "../../features/bookings/BookingDataBox";

import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import ButtonGroup from "../../ui/ButtonGroup";
import Button from "../../ui/Button";
import ButtonText from "../../ui/ButtonText";

import { useMoveBack } from "../../hooks/useMoveBack";
import Spinner from "../../ui/Spinner";
import { useBooking } from "../bookings/useBooking";
import Checkbox from "../../ui/Checkbox";
import { useEffect, useState } from "react";
import { formatCurrency } from "../../utils/helpers";
import { useCheckin } from "./useCheckin";
import { useSettings } from "../settings/useSettings";

const Box = styled.div`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  padding: 2.4rem 4rem;
`;

function CheckinBooking() {
  const { checkin, isCheckingin } = useCheckin();
  const [addBreakfast, setAddBreakfast] = useState(false);
  const [checkPayment, setCheckPayment] = useState(false);
  const moveBack = useMoveBack();
  const { booking, isLoading } = useBooking();
  const { settings, isLoading: isLoadingSettings } = useSettings();

  useEffect(() => {
    setCheckPayment(booking?.isPaid);
  }, [booking]);

  if (isLoading || isLoadingSettings) return <Spinner />;

  const {
    id: bookingId,
    guests,
    totalPrice,
    numGuests,
    hasBreakfast,
    numNights,
  } = booking;

  const optinalBreakfastPrice =
    settings?.breakfastPrice * numGuests * numNights;

  function handleCheckin() {
    if (!checkPayment) return;

    if (addBreakfast) {
      checkin({
        bookingId,
        breakfast: {
          totalPrice: optinalBreakfastPrice + totalPrice,
          hasBreakfast: true,
          extraPrice: optinalBreakfastPrice,
        },
      });
    } else {
      checkin({ bookingId, breakfast: {} });
    }
  }

  return (
    <>
      <Row type='horizontal'>
        <Heading as='h1'>Check in booking #{bookingId}</Heading>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <BookingDataBox booking={booking} />

      {!hasBreakfast && (
        <Box>
          <Checkbox
            checked={addBreakfast}
            onChange={() => {
              setAddBreakfast((a) => !a);
              setCheckPayment(false);
            }}
            id='breakfast'
          >
            I confirm that want to add a brackfast for his entire stay (
            {formatCurrency(optinalBreakfastPrice)})
          </Checkbox>
        </Box>
      )}

      <Box>
        <Checkbox
          checked={checkPayment}
          onChange={() => setCheckPayment((c) => !c)}
          disabled={checkPayment || isCheckingin}
          id='cunfirm'
        >
          {`I confirm that ${
            guests.fullName
          } has paid the total amount ${formatCurrency(
            addBreakfast ? totalPrice + optinalBreakfastPrice : totalPrice
          )}`}
          {addBreakfast &&
            `
          (${formatCurrency(totalPrice)} + ${formatCurrency(
              optinalBreakfastPrice
            )})`}
        </Checkbox>
      </Box>

      <ButtonGroup>
        <Button
          onClick={handleCheckin}
          disabled={!checkPayment || isCheckingin}
        >
          Check in booking #{bookingId}
        </Button>
        <Button variations='secondary' onClick={moveBack}>
          Back
        </Button>
      </ButtonGroup>
    </>
  );
}

export default CheckinBooking;
