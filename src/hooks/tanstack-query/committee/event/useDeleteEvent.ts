import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { deleteEvent } from "@/apis/committee/event";

interface useDeleteEventParams {
  page: number;
  size: number;
  direction?: "asc" | "desc";
}

export const useDeleteEvent = ({ page, size, direction }: useDeleteEventParams) => {
  const { mutate } = useDeleteEventMutate();
  const queryClient = useQueryClient();

  const onDeleteEvent = (id: number) => {
    mutate(id, {
      onError: (error: AxiosError<{ message: string }>) => {
        alert(error.response?.data.message);
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
  return useMutation<void, AxiosError<{ message: string }>, number>({
    mutationKey: ["deleteEvent"],
    mutationFn: deleteEvent,
  });
};
