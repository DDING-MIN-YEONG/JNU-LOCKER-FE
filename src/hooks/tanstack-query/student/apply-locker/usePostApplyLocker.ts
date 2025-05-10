import { LockerList } from "@/apis/dtos/student/locker";
import { ApplyLockerRequest, postApplyLocker } from "@/apis/student/apply-locker";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";

export const usePostApplyLocker = () => {
  const { mutate } = usePostApplyLockerMutate();
  const queryClient = useQueryClient();

  const onApplyLocker = (eventId: string, lockerName: string, floor: number) => {
    const lockerListData: LockerList[] | undefined = queryClient.getQueryData(["lockerList", eventId]);

    const lockerId = lockerListData
      ?.find((locker) => locker.floorNumber === floor)
      ?.lockerList.find((locker) => locker.code === lockerName)?.lockerId;

    if (lockerId === undefined) {
      alert("유효하지 않은 사물함 이름입니다.");
      return;
    }

    mutate(
      { eventId, lockerId },
      {
        onError: (error: AxiosError<{ message: string }>) => {
          alert(error.response?.data.message || "사물함 신청에 실패했습니다.");
        },
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ["lockerList", eventId] });
          queryClient.invalidateQueries({ queryKey: ["myRegistrationLocker", eventId] });
          alert("사물함 신청에 성공하셨습니다.");
        },
      },
    );
  };

  return {
    onApplyLocker,
  };
};

export const usePostApplyLockerMutate = () => {
  return useMutation<void, AxiosError<{ message: string }>, ApplyLockerRequest>({
    mutationKey: ["applyLocker"],
    mutationFn: postApplyLocker,
  });
};
