import { MyRegistrationLocker } from "@/apis/dtos/student/locker";
import { getMyRegistrationLocker } from "@/apis/apply-locker";
import { ApiResponseError } from "@/types/common/api";
import { useQuery } from "@tanstack/react-query";

export const useGetMyRegistrationLocker = (eventId: string) => {
  return useQuery<MyRegistrationLocker, ApiResponseError>({
    queryKey: ["myRegistrationLocker", eventId],
    queryFn: () => getMyRegistrationLocker(eventId),
    enabled: !!eventId,
  });
};
