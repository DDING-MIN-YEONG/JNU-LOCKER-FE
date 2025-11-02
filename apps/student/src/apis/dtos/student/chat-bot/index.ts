export class ChatBotMessage {
  message: string;

  constructor({ message }: { message: string }) {
    this.message = message;
  }
}
