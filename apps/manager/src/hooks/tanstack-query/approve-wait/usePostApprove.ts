import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ApiResponseError } from "@/types/common/api";
import { useQueryKeys } from "@/hooks/tanstack-query/common/useQueryKeys";
import { ApproveWaitRequest } from "@/types/approve-wait";
import { postApproveWait } from "@/apis/approve-wait";

export const usePostApprove = () => {
  const { mutate } = usePostApproveMutate();
  const queryClient = useQueryClient();

  const approveWaitQueryKeys = useQueryKeys(["approveWait"]);

  const onApprove = (formData: ApproveWaitRequest) => {
    mutate(formData, {
      onError: (error) => {
        alert(error.response.data.message || "가입 승인에 실패하였습니다.");
      },
      onSuccess: () => {
        approveWaitQueryKeys.forEach((queryKey) => {
          queryClient.invalidateQueries({ queryKey });
        });

        alert("가입 승인이 완료되었습니다.");
      },
    });
  };
  return {
    onApprove,
  };
};

export const usePostApproveMutate = () => {
  return useMutation<void, ApiResponseError, ApproveWaitRequest>({
    mutationKey: ["approveWait"],
    mutationFn: postApproveWait,
  });
};
