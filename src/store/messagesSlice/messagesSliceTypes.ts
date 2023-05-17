interface Message {
  text: string;
  my: boolean;
  // status: boolean;
}

interface LastMessage {
  receiptId: string;
  state: boolean;
}

export interface Messages {
  user: string;
  message: Message[];
}

export interface MessagesState {
  messages: Messages[];
  active: string;
  lastMessage: LastMessage;
  loading: boolean;
  error: string | null;
}
export interface Act {
  idInstance: string;
  apiTokenInstance: string;
  chatId: string;
  message: string;
}

interface MessageData {
  extendedTextMessageData?: { text: string };
  textMessageData?: { textMessage: string };
}

interface GetBody {
  messageData: MessageData;
  senderData: { chatId: string };
}

export interface GetMessages {
  body: GetBody;
  receiptId: number;
}

export interface DequeueMessages {
  result: boolean;
}

export interface ActTypeDequeueMessages {
  idInstance: string;
  apiTokenInstance: string;
  receiptId: string;
}
