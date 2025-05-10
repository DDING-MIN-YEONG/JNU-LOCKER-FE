import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteEvent } from "@/apis/committee/event";
import { ApiResponseError } from "@/types/common/api";

interface useDeleteEventParams {
  page: number;
  size: number;
  direction?: "asc" | "desc";
}

export const useDeleteEvent = ({ page, size, direction }: useDeleteEventParams) => {
  const { mutate } = useDeleteEventMutate();
  const queryClient = useQueryClient();

  const onDeleteEvent = (id: string) => {
    mutate(id, {
      onError: (error) => {
        alert(error.response.data.message || "이벤트 삭제에 실패하였습니다.");
      },
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["eventList", page, size, direction] });
        alert("이벤트가 삭제되었습니다.");
      },
    });
  };
  return {
    onDeleteEvent,
  };
};

export const useDeleteEventMutate = () => {
  return useMutation<void, ApiResponseError, string>({
    mutationKey: ["deleteEvent"],
    mutationFn: deleteEvent,
  });
};
