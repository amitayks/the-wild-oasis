import { Link } from "react-router-dom";
import { Button } from "../../../ui/Button";
import { Flag } from "../../../ui/Flag";
import { Tag } from "../../../ui/Tag";
import { CheckoutButton } from "../CheckoutButton";
import { Guest, StyledTodayItem } from "./TodayItem.styled";
import { memo } from "react";

export const TodayItem = memo(({ stay }) => {
  const { id, guests, status, numNights } = stay;

  return (
    <StyledTodayItem>
      {status === "unconfirmed" && <Tag type='green'>Arraving</Tag>}
      {status === "checked-in" && <Tag type='blue'>departing</Tag>}
      <Flag
        src={guests.countryFlag}
        alt={`the flag of ${guests.countryFlag}`}
      />
      <Guest>{guests.fullName}</Guest>
      <span>{numNights} </span>

      {status === "unconfirmed" && (
        <Button size='small' as={Link} to={`/checkin/${id}`}>
          Check In
        </Button>
      )}

      {status === "checked-in" && <CheckoutButton bookingId={id} />}
    </StyledTodayItem>
  );
});

TodayItem.displayName = "TodayItem";
