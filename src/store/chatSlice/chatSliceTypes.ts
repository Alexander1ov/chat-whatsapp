export interface User {
  IdInstance: string;
  ApiTokenInstance: string;
}

export interface ChatState {
  user: User;
  entrance: boolean;
  newChat: boolean;
  loading: boolean;
  error: string | null;
}
