export interface User {
  IdInstance: string;
  ApiTokenInstance: string;
}

export interface ChatState {
  user: User;
  entrance: boolean;
  newChat: boolean;
  contacts: Array<string>;
  loading: boolean;
  error: string | null;
}
