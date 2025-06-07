import { useMutation, useQueryClient } from "@tanstack/react-query";
import { putEventPublish } from "@/apis/committee/event";
import { ApiResponseError } from "@/types/common/api";

interface usePutEventPublishParams {
  page: number;
  size: number;
  direction?: "asc" | "desc";
}

export const usePutEventPublish = ({ page, size, direction }: usePutEventPublishParams) => {
  const { mutate, isPending } = usePutEventPublishMutate();
  const queryClient = useQueryClient();

  const onChangeEventPublish = (id: string, isPublish: boolean) => {
    mutate(
      { id, isPublish },
      {
        onError: (error) => {
          alert(error.response.data.message || "이벤트 게시 상태 변경에 실패하였습니다.");
        },
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ["eventList", page, size, direction] });
          alert("이벤트 게시 상태가 변경되었습니다.");
        },
      },
    );
  };

  return {
    onChangeEventPublish,
    isChangeEventLoading: isPending,
  };
};

export const usePutEventPublishMutate = () => {
  return useMutation<void, ApiResponseError, { id: string; isPublish: boolean }>({
    mutationKey: ["putEventPublish"],
    mutationFn: putEventPublish,
  });
};
