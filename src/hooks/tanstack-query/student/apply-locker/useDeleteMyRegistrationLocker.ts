import { deleteMyRegistrationLocker } from "@/apis/student/apply-locker";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";

export const useDeleteMyRegistrationLocker = (eventId: string) => {
  const { mutate } = useDeleteMyRegistrationLockerMutate();
  const queryClient = useQueryClient();

  const onDeleteMyRegistrationLocker = () => {
    mutate(eventId, {
      onError: (error: AxiosError<{ message: string }>) => {
        alert(error.response?.data.message);
      },
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["lockerList", eventId] });
        queryClient.invalidateQueries({ queryKey: ["myRegistrationLocker", eventId] });
        alert("사물함 신청이 취소되었습니다.");
      },
    });
  };
  return {
    onDeleteMyRegistrationLocker,
  };
};

export const useDeleteMyRegistrationLockerMutate = () => {
  return useMutation<void, AxiosError<{ message: string }>, string>({
    mutationKey: ["deleteMyRegistrationLocker"],
    mutationFn: deleteMyRegistrationLocker,
  });
};
