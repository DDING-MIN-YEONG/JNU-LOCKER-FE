import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ApiResponseError } from "@/types/common/api";
import { useQueryKeys } from "@/hooks/tanstack-query/common/useQueryKeys";
import { ApproveWaitRequest } from "@/types/approve-wait";
import { postRejectApproveWait } from "@/apis/approve-wait";

export const usePostRejectApproveWait = () => {
  const { mutate } = usePostRejectApproveWaitMutate();
  const queryClient = useQueryClient();

  const approveWaitQueryKeys = useQueryKeys(["approveWait"]);

  const onReject = (formData: ApproveWaitRequest) => {
    mutate(formData, {
      onError: (error) => {
        alert(error.response.data.message || "가입 승인 거절에 실패하였습니다.");
      },
      onSuccess: () => {
        approveWaitQueryKeys.forEach((queryKey) => {
          queryClient.invalidateQueries({ queryKey });
        });

        alert("가입 승인 거절이 완료되었습니다.");
      },
    });
  };
  return {
    onReject,
  };
};

export const usePostRejectApproveWaitMutate = () => {
  return useMutation<void, ApiResponseError, ApproveWaitRequest>({
    mutationKey: ["rejectApproveWait"],
    mutationFn: postRejectApproveWait,
  });
};
