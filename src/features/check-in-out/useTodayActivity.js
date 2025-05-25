import { useQuery } from "@tanstack/react-query";
import { getStaysTodayActivity } from "../../services/apiBookings";

export function useTodayActivity() {
  const { data: stays, isLoading } = useQuery({
    qyeryKey: ["today-Activity"],
    queryFn: getStaysTodayActivity,
  });

  return { stays, isLoading };
}
