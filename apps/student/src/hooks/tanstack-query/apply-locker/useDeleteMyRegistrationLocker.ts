import { deleteMyRegistrationLocker } from "@/apis/apply-locker";
import { ApiResponseError } from "@/types/common/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useDeleteMyRegistrationLocker = (eventId: string) => {
  const { mutate } = useDeleteMyRegistrationLockerMutate();
  const queryClient = useQueryClient();

  const onDeleteMyRegistrationLocker = () => {
    mutate(eventId, {
      onError: (error) => {
        alert(error.response.data.message || "사물함 신청 취소에 실패했습니다.");
      },
      onSuccess: () => {
        alert("사물함 신청이 취소되었습니다.");
      },
      onSettled: () => {
        queryClient.invalidateQueries({ queryKey: ["myRegistrationLocker", eventId] });
        queryClient.invalidateQueries({ queryKey: ["lockerList", eventId] });
      },
    });
  };
  return {
    onDeleteMyRegistrationLocker,
  };
};

export const useDeleteMyRegistrationLockerMutate = () => {
  return useMutation<void, ApiResponseError, string>({
    mutationKey: ["deleteMyRegistrationLocker"],
    mutationFn: deleteMyRegistrationLocker,
  });
};
