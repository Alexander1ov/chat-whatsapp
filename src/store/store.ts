import { configureStore } from "@reduxjs/toolkit";

import chatSlice from "./chatSlice/chatSlice";
import messagesSlice from "./messagesSlice/messages.Slice";

const store = configureStore({
  reducer: {
    chat: chatSlice,
    messages:messagesSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;