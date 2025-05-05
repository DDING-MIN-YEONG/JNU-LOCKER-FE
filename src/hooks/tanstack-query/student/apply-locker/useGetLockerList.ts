import { getLockerList } from "@/apis/student/apply-locker";
import { useQuery } from "@tanstack/react-query";

export const useGetLockerList = (eventId: number) => {
  return useQuery({
    queryKey: ["lockerList", eventId],
    queryFn: () => getLockerList(eventId),
    enabled: eventId > 0,
  });
};
