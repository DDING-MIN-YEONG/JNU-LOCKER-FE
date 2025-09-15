import { useMutation, useQueryClient } from "@tanstack/react-query";
import { putEventPublish } from "@/apis/committee/event";
import { ApiResponseError } from "@/types/common/api";
import { EventList } from "@/apis/dtos/committee/event";

interface usePutEventPublishParams {
  page: number;
  size: number;
  direction?: "asc" | "desc";
}

export const usePutEventPublish = ({ page, size, direction }: usePutEventPublishParams) => {
  const { mutate, isPending } = usePutEventPublishMutate();
  const queryClient = useQueryClient();

  const onChangeEventPublish = (id: string, isPublish: boolean) => {
    const queryKey = ["eventList", page, size, direction];

    const previousData = queryClient.getQueryData(queryKey);

    // Optimistic update: UI를 즉시 업데이트
    queryClient.setQueryData(queryKey, (oldData: EventList) => {
      if (!oldData) return oldData;

      return {
        ...oldData,
        content: oldData.content.map((event) => (event.id === id ? { ...event, publish: isPublish } : event)),
      };
    });

    mutate(
      { id, isPublish },
      {
        onError: (error) => {
          queryClient.setQueryData(queryKey, previousData);
          alert(error?.response?.data?.message || "이벤트 게시 상태 변경에 실패하였습니다.");
        },
        onSuccess: () => {
          alert("이벤트 게시 상태가 변경되었습니다.");
        },
        onSettled: () => {
          queryClient.invalidateQueries({ queryKey: ["eventList", page, size, direction] });
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
