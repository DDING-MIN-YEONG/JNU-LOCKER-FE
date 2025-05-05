import { useGetApplyLockerPageEventId } from "@/hooks/student/apply-locker/useGetApplyLockerPageEventId";
import { useGetMyRegistrationLocker } from "@/hooks/tanstack-query/student/apply-locker/useGetMyRegistrationLocker";

export const useMyRegistrationLocker = () => {
  const { eventId } = useGetApplyLockerPageEventId();

  const { data: myRegistrationLocker } = useGetMyRegistrationLocker(eventId);

  return {
    myRegistrationLocker,
  };
};
