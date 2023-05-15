import {
  createSlice,
  PayloadAction,
  createAsyncThunk,
  AnyAction,
} from "@reduxjs/toolkit";
import axios from "axios";

import { Messages, MessagesState } from "./messagesSliceTypes";

interface Act {
  chatId: string;
  message: string;
}

export const sendMessages = createAsyncThunk<
  Messages[],
  Act,
  { rejectValue: string }
>("messages/sendMessages", async function (payload, { rejectWithValue }) {
  //3 rejectValue параметр - AsyncThunkConfig
  try {
    console.log(payload);

    const response = await axios.post(
      "https://api.green-api.com/waInstance1101820615/SendMessage/98c263693fb14b568eb022132d147ad442976c29de5c48afb8",
      payload
    );
    return response.data;
  } catch (e) {
    return rejectWithValue("Failed to load list of currencies");
  }
});

const initialState: MessagesState = {
  messages: [],
  active: "",
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
        message: { text: [], my: true },
      });
    },
    postMessage(state, action: PayloadAction<string[]>) {
      const idx = state.messages.findIndex(
        (elem: Messages) => elem.user === action.payload[0]
      );
      state.messages[idx].message.text.push(action.payload[1]);
      state.messages[idx].message.my = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendMessages.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(sendMessages.fulfilled, (state, action) => {
        state.messages = action.payload;
        state.loading = false;
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
