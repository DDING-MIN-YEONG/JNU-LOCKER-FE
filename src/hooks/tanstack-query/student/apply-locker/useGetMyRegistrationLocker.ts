import { getMyRegistrationLocker } from "@/apis/student/apply-locker";
import { useQuery } from "@tanstack/react-query";

export const useGetMyRegistrationLocker = (eventId: string) => {
  return useQuery({
    queryKey: ["myRegistrationLocker", eventId],
    queryFn: () => getMyRegistrationLocker(eventId),
    enabled: !!eventId,
  });
};
