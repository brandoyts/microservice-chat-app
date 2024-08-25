export type SendMessage = {
  from: string;
  to: string;
  body: string;
};

export type ChatSocketContext = {
  sendMessage(send: SendMessage): void;
};
