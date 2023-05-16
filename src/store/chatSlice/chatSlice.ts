import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ChatState } from "./chatSliceTypes";

const initialState: ChatState = {
  user: { IdInstance: "", ApiTokenInstance: "" },
  entrance: true,
  newChat: false,
  contacts: [],
  loading: false,
  error: null,
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    handleEntrance(
      state,
      action: PayloadAction<{
        IdInstance: string;
        ApiTokenInstance: string;
      }>
    ) {
      state.user = action.payload;
      state.entrance = false;
    },
    addChat(state) {
      state.newChat = !state.newChat;
    },
    loginToChat(state, action: PayloadAction<string>) {
      state.contacts.push(action.payload);
    },
  },
});

export const { handleEntrance, addChat, loginToChat } = chatSlice.actions;
export default chatSlice.reducer;
