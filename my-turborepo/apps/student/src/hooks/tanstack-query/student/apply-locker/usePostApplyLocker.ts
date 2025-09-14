import { LockerList } from "@/apis/dtos/student/locker";
import { ApplyLockerRequest, postApplyLocker } from "@/apis/student/apply-locker";
import { ApiResponseError } from "@/types/common/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const usePostApplyLocker = () => {
  const { mutate, isPending } = usePostApplyLockerMutate();
  const queryClient = useQueryClient();

  const onApplyLocker = (eventId: string, lockerName: string, floor: number) => {
    const lockerListData: LockerList[] | undefined = queryClient.getQueryData(["lockerList", eventId]);

    const lockerFloor = lockerListData?.find((locker) => locker.floorNumber === floor);
    if (!lockerFloor) {
      alert("존재하지 않는 층수입니다.");
      return;
    }

    const lockerId = lockerFloor.lockerList.find((locker) => locker.code === lockerName)?.lockerId;

    if (lockerId === undefined) {
      alert("존재하지 않는 사물함 이름입니다. 사물함 이름을 정확히 입력해주세요.");
      return;
    }

    mutate(
      { eventId, lockerId },
      {
        onError: (error) => {
          alert(error.response.data.message || "사물함 신청에 실패했습니다.");
        },
        onSuccess: () => {
          alert("사물함 신청에 성공하셨습니다.");
        },
        onSettled: () => {
          queryClient.invalidateQueries({ queryKey: ["myRegistrationLocker", eventId] });
          queryClient.invalidateQueries({ queryKey: ["lockerList", eventId] });
        },
      },
    );
  };

  return {
    onApplyLocker,
    isApplyLockerLoading: isPending,
  };
};

export const usePostApplyLockerMutate = () => {
  return useMutation<void, ApiResponseError, ApplyLockerRequest>({
    mutationKey: ["applyLocker"],
    mutationFn: postApplyLocker,
  });
};
