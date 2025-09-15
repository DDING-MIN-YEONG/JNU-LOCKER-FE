import { useGetApplyLockerPageEventId } from "@/hooks/apply-locker/useGetApplyLockerPageEventId";
import { useGetLockerInfo } from "@/hooks/tanstack-query/student/apply-locker/useGetLockerInfo";

export const useLockerInfo = () => {
  const { eventId } = useGetApplyLockerPageEventId();

  const { data: lockerInfo, isPending, isError } = useGetLockerInfo(eventId);

  return {
    lockerInfo,
    isError,
    isPending,
  };
};
