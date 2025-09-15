import { useMutation, useQueryClient } from "@tanstack/react-query";
import { putEvent } from "@/apis/event";
import { PutEventRequest } from "@/types/event";
import { ApiResponseError } from "@/types/common/api";
import { Dispatch, SetStateAction } from "react";

export const usePutEvent = (eventId: string, setIsPutMode: Dispatch<SetStateAction<boolean>>) => {
  const { mutate, isPending } = usePutEventMutate();
  const queryClient = useQueryClient();

  const onPutEvent = (formData: PutEventRequest) => {
    mutate(
      { formData, eventId },
      {
        onError: (error) => {
          if (error.response.data.code === "E009") {
            setIsPutMode(false);
          }
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
    isPutEventLoading: isPending,
  };
};

export const usePutEventMutate = () => {
  return useMutation<void, ApiResponseError, { formData: PutEventRequest; eventId: string }>({
    mutationKey: ["putEvent"],
    mutationFn: putEvent,
  });
};
