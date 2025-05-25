import { getLockerInfo } from "@/apis/student/apply-locker";
import { useQuery } from "@tanstack/react-query";

export const useGetLockerInfo = (eventId: string) => {
  return useQuery({
    queryKey: ["lockerInfo", eventId],
    queryFn: () => getLockerInfo(eventId),
    enabled: !!eventId,
  });
};
