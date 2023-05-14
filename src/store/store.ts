import { configureStore } from "@reduxjs/toolkit";

import chatSlice from "./chatSlice/chatSlice";

const store = configureStore({
  reducer: {
    chat: chatSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;