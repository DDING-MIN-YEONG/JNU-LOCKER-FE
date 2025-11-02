import { postChatBotMessage } from "@/apis/chat-bot";
import { ChatBotMessage } from "@/apis/dtos/student/chat-bot";
import { ApiResponseError } from "@/types/common/api";
import { useMutation } from "@tanstack/react-query";

export const usePostChatBotMessage = () => {
  const { mutate, isPending } = usePostChatBotMessageMutate();

  const onPostChatBotMessage = (message: string, onSuccess?: (data: ChatBotMessage) => void, onError?: () => void) => {
    mutate(message, {
      onSuccess: (data) => {
        onSuccess?.(data);
      },
      onError: () => {
        onError?.();
      },
    });
  };

  return {
    onPostChatBotMessage,
    isPostChatBotMessageLoading: isPending,
  };
};

export const usePostChatBotMessageMutate = () => {
  return useMutation<ChatBotMessage, ApiResponseError, string>({
    mutationKey: ["postChatBotMessage"],
    mutationFn: (message: string) => postChatBotMessage(message),
  });
};
