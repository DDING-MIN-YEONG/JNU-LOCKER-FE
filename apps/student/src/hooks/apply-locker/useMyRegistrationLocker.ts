import { useGetApplyLockerPageEventId } from "@/hooks/apply-locker/useGetApplyLockerPageEventId";
import { useDeleteMyRegistrationLocker } from "@/hooks/tanstack-query/apply-locker/useDeleteMyRegistrationLocker";
import { useGetMyRegistrationLocker } from "@/hooks/tanstack-query/apply-locker/useGetMyRegistrationLocker";

export const useMyRegistrationLocker = () => {
  const { eventId } = useGetApplyLockerPageEventId();

  const { data: myRegistrationLocker, isPending, isError, error } = useGetMyRegistrationLocker(eventId);

  const { onDeleteMyRegistrationLocker } = useDeleteMyRegistrationLocker(eventId);

  return {
    myRegistrationLocker,
    onDeleteMyRegistrationLocker,
    isPending,
    isError,
    error,
  };
};
