interface Message {
  text: Array<string>;
  my: boolean;
  // status: boolean;
}

export interface Messages {
  user: string;
  message: Message;
}

export interface MessagesState {
  messages: Messages[];
  active: string;
  loading: boolean;
  error: string | null;
}
