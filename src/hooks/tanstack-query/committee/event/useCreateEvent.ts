import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { ROUTE } from "@/constants/routes";
import { postCreateEvent } from "@/apis/committee/event";
import { CreateEventRequest } from "@/types/committee/event";
import { ApiResponseError } from "@/types/common/api";
import { useQueryKeys } from "@/hooks/tanstack-query/common/useQueryKeys";

export const useCreateEvent = () => {
  const router = useRouter();
  const { mutate } = useCreateEventMutate();
  const queryClient = useQueryClient();

  const eventQueryKeys = useQueryKeys(["eventList"]);

  const applyQueryKeys = useQueryKeys(["applyList"]);

  const onCreateEvent = (formData: CreateEventRequest) => {
    mutate(formData, {
      onError: (error) => {
        alert(error.response.data.message || "이벤트 생성에 실패하였습니다.");
      },
      onSuccess: () => {
        eventQueryKeys.forEach((queryKey) => {
          queryClient.invalidateQueries({ queryKey });
        });

        applyQueryKeys.forEach((queryKey) => {
          queryClient.invalidateQueries({ queryKey });
        });

        router.push(ROUTE.COMMITTEE.EVENT_LIST);
        alert("이벤트 생성에 성공하셨습니다.");
      },
    });
  };
  return {
    onCreateEvent,
  };
};

export const useCreateEventMutate = () => {
  return useMutation<void, ApiResponseError, CreateEventRequest>({
    mutationKey: ["createEvent"],
    mutationFn: postCreateEvent,
  });
};
