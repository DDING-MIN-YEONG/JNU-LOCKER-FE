import { useGetApplyLockerPageEventId } from "@/hooks/student/apply-locker/useGetApplyLockerPageEventId";
import { useDeleteMyRegistrationLocker } from "@/hooks/tanstack-query/student/apply-locker/useDeleteMyRegistrationLocker";
import { useGetMyRegistrationLocker } from "@/hooks/tanstack-query/student/apply-locker/useGetMyRegistrationLocker";

export const useMyRegistrationLocker = () => {
  const { eventId } = useGetApplyLockerPageEventId();

  const { data: myRegistrationLocker, isPending, isError } = useGetMyRegistrationLocker(eventId);

  const { onDeleteMyRegistrationLocker } = useDeleteMyRegistrationLocker(eventId);

  return {
    myRegistrationLocker,
    onDeleteMyRegistrationLocker,
    isPending,
    isError,
  };
};
