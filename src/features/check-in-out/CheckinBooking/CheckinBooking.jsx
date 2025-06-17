import BookingDataBox from "../../bookings/BookingDataBox";
import { Box } from "./CheckinBooking.styled";

import Button from "../../../ui/Button";
import ButtonGroup from "../../../ui/ButtonGroup";
import ButtonText from "../../../ui/ButtonText";
import Heading from "../../../ui/Heading";
import Row from "../../../ui/Row";

import { useEffect, useState } from "react";
import { useMoveBack } from "../../../hooks/useMoveBack";
import Checkbox from "../../../ui/Checkbox";
import Spinner from "../../../ui/Spinner";
import { formatCurrency } from "../../../utils/helpers";
import { useBooking } from "../../bookings/useBooking";
import { useSettings } from "../../settings/useSettings";
import { useCheckin } from "../useCheckin";

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
