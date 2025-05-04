import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { putEventPublish } from "@/apis/committee/event";

interface usePutEventPublishParams {
  page: number;
  size: number;
  direction?: "asc" | "desc";
}

export const usePutEventPublish = ({ page, size, direction }: usePutEventPublishParams) => {
  const { mutate } = usePutEventPublishMutate();
  const queryClient = useQueryClient();

  const onChangeEventPublish = (id: number, isPublish: boolean) => {
    mutate(
      { id, isPublish },
      {
        onError: (error: AxiosError<{ message: string }>) => {
          alert(error.response?.data.message);
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
  };
};

export const usePutEventPublishMutate = () => {
  return useMutation<void, AxiosError<{ message: string }>, { id: number; isPublish: boolean }>({
    mutationKey: ["putEventPublish"],
    mutationFn: putEventPublish,
  });
};
