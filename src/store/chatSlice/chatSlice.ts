import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ChatState } from "./chatSliceTypes";

const initialState: ChatState = {
  user: { IdInstance: "", ApiTokenInstance: "" },
  entrance: true,
  newChat: false,
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
  },
});

export const { handleEntrance, addChat } = chatSlice.actions;
export default chatSlice.reducer;
