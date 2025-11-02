import { ChatBotMessage } from "../dtos/student/chat-bot";
import { https } from "../instance/https";

export const postChatBotMessage = async (message: string) => {
  const { data } = await https.post("ai/chat", {
    message,
  });

  return new ChatBotMessage(data);
};
