import {createSlice, PayloadAction, createAsyncThunk, AnyAction} from "@reduxjs/toolkit";
import axios from "axios";

import {Act, ActTypeDequeueMessages, DequeueMessages, GetMessages, Messages, MessagesState} from "./messagesSliceTypes";
import { BASE_URL } from "../../utils/constants";

export const sendMessages = createAsyncThunk<
  Messages[],
  Act,
  { rejectValue: string }
>("messages/sendMessages", async function (payload, { rejectWithValue }) {
  try {
    const response = await axios.post(
      `${BASE_URL}/waInstance${payload.idInstance}/SendMessage/${payload.apiTokenInstance}`,
      { chatId: payload.chatId, message: payload.message }
    );
    return response.data;
  } catch (e) {
    return rejectWithValue("Failed to send message");
  }
});

export const getMessages = createAsyncThunk<
  GetMessages | null,
  Pick<Act, "idInstance" | "apiTokenInstance">,
  { rejectValue: string }
>("messages/getMessages", async function (payload, { rejectWithValue }) {
  try {
    const response = await axios.get(
      `${BASE_URL}/waInstance${payload.idInstance}/receiveNotification/${payload.apiTokenInstance}`
    );
    return response.data;
  } catch (e) {
    return rejectWithValue("Failed to get message");
  }
});

export const dequeueMessages = createAsyncThunk<
  DequeueMessages,
  ActTypeDequeueMessages,
  { rejectValue: string }
>("messages/dequeueMessages", async function (payload, { rejectWithValue }) {
  try {
    const response = await axios.delete(
      `${BASE_URL}/waInstance${payload.idInstance}/deleteNotification/${payload.apiTokenInstance}/${payload.receiptId}`
    );
    return response.data;
  } catch (e) {
    return rejectWithValue("Failed to clear message queue");
  }
});

const initialState: MessagesState = {
  messages: [],
  active: "",
  lastMessage: {
    receiptId: "",
    state: false,
  },
  loading: false,
  error: null,
};

const messagesSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {
    activeChat(state, action: PayloadAction<string>) {
      state.active = action.payload;
    },
    messagesChat(state, action: PayloadAction<string>) {
      state.messages.push({
        user: action.payload,
        message: [],
      });
    },
    postMessage(state, action: PayloadAction<string[]>) {
      const idx = state.messages.findIndex(
        (elem: Messages) => elem.user === action.payload[0]
      );
      state.messages[idx].message.push({ text: action.payload[1], my: true });
    },
  },
  extraReducers: (builder) => {
    builder
      // Отправка сообщений
      .addCase(sendMessages.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(sendMessages.fulfilled, (state, action) => {
        // state.messages = action.payload;
        state.loading = false;
      })

      //Получение сообщения
      .addCase(getMessages.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getMessages.fulfilled, (state, action) => {
        if (action.payload !== null) {
          const user = action.payload.body.senderData.chatId.substring(0, 11);
          let message = "";
          if (!!action.payload.body.messageData.textMessageData) {
            message =
              action.payload.body.messageData.textMessageData.textMessage;
          } else if (
            !!action.payload.body.messageData.extendedTextMessageData
          ) {
            message =
              action.payload.body.messageData.extendedTextMessageData.text;
          }
          const idx = state.messages.findIndex(
            (elem: Messages) => elem.user === user
          );
          if (idx === -1) {
            state.messages.push({
              user: user,
              message: [{ text: message, my: false }],
            });
          } else {
            state.messages[idx].message.push({ text: message, my: false });
          }
          state.lastMessage.receiptId = String(action.payload.receiptId);
        }
        state.loading = false;
      })

      // Удаление из очереди
      .addCase(dequeueMessages.fulfilled, (state, action) => {
        if (!!action.payload.result) {
          state.lastMessage.state = true;
        } else {
          state.lastMessage.state = false;
        }
      })
      
      .addMatcher(isError, (state, action: PayloadAction<string>) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export const { activeChat, messagesChat, postMessage } = messagesSlice.actions;
export default messagesSlice.reducer;

function isError(action: AnyAction) {
  return action.type.endsWith("rejected");
}
