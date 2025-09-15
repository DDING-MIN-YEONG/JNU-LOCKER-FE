import { getLockerList } from "@/apis/apply-locker";
import { useQuery } from "@tanstack/react-query";

export const useGetLockerList = (eventId: string) => {
  return useQuery({
    queryKey: ["lockerList", eventId],
    queryFn: () => getLockerList(eventId),
    enabled: !!eventId,
  });
};
