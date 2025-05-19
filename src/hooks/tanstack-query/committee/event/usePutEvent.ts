import { useMutation, useQueryClient } from "@tanstack/react-query";
import { putEvent } from "@/apis/committee/event";
import { PutEventRequest } from "@/types/committee/event";
import { ApiResponseError } from "@/types/common/api";

export const usePutEvent = (eventId: string) => {
  const { mutate } = usePutEventMutate();
  const queryClient = useQueryClient();

  const onPutEvent = (formData: PutEventRequest) => {
    mutate(
      { formData, eventId },
      {
        onError: (error) => {
          alert(error.response.data.message || "이벤트 수정에 실패하였습니다.");
        },
        onSuccess: () => {
          alert("이벤트 수정에 성공하셨습니다.");
          queryClient.invalidateQueries({ queryKey: ["event", eventId] });
        },
      },
    );
  };
  return {
    onPutEvent,
  };
};

export const usePutEventMutate = () => {
  return useMutation<void, ApiResponseError, { formData: PutEventRequest; eventId: string }>({
    mutationKey: ["putEvent"],
    mutationFn: putEvent,
  });
};
