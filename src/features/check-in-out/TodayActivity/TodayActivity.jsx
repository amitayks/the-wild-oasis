import styled from "styled-components";

import Heading from "../../../ui/Heading";
import Row from "../../../ui/Row";
import { useTodayActivity } from "../useTodayActivity";
import Spinner from "../../../ui/Spinner";
import TodayItem from "../TodayItem";
import { NoActivity, StyledToday, TodayList } from "./TodayActivity.styled";

function TodayActivity() {
  const { stays, isLoading } = useTodayActivity();

  return (
    <StyledToday>
      <Row type='horizontal'>
        <Heading as='h2'>Today Activity</Heading>
      </Row>

      {!isLoading ? (
        stays?.length > 0 ? (
          <TodayList>
            {stays.map((stay) => (
              <TodayItem stay={stay} key={stay.id} />
            ))}
          </TodayList>
        ) : (
          <NoActivity>there is no activity for today</NoActivity>
        )
      ) : (
        <Spinner />
      )}
    </StyledToday>
  );
}

export default TodayActivity;
