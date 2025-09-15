import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteEvent } from "@/apis/committee/event";
import { ApiResponseError } from "@/types/common/api";
import { useQueryKeys } from "@/hooks/tanstack-query/common/useQueryKeys";
import { useRouter } from "next/navigation";
import { ROUTE } from "@/constants/routes";

export const useDeleteEvent = (eventId: string) => {
  const { mutate, isPending } = useDeleteEventMutate();
  const queryClient = useQueryClient();
  const router = useRouter();

  const eventQueryKeys = useQueryKeys(["eventList"]);

  const onDeleteEvent = () => {
    mutate(eventId, {
      onError: (error) => {
        alert(error.response.data.message || "이벤트 삭제에 실패하였습니다.");
      },
      onSuccess: () => {
        eventQueryKeys.forEach((queryKey) => {
          queryClient.invalidateQueries({ queryKey });
        });

        router.push(ROUTE.EVENT_LIST);
        alert("이벤트가 삭제되었습니다.");
      },
    });
  };
  return {
    onDeleteEvent,
    isDeleteEventLoading: isPending,
  };
};

export const useDeleteEventMutate = () => {
  return useMutation<void, ApiResponseError, string>({
    mutationKey: ["deleteEvent"],
    mutationFn: deleteEvent,
  });
};
