export interface Chat {
  ID: string;
  NumCode: string;
  CharCode: string;
  Nominal: number;
  Name: string;
  Value: number;
  Previous: number;
}

interface User {
  IdInstance: string;
  ApiTokenInstance: string;
}

export interface ChatState {
  messages: Chat[];
  user: User;
  entrance: boolean;
  loading: boolean;
  error: string | null;
}
