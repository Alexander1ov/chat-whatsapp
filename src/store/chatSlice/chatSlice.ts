import {
  createSlice,
  PayloadAction,
  createAsyncThunk,
  AnyAction,
} from "@reduxjs/toolkit";
import axios from "axios";

import { Chat, ChatState } from "./chatSliceTypes";

export const fetchChat = createAsyncThunk<
  Chat[],
  undefined,
  { rejectValue: string }
>("chat/fetchChat", async function (_, { rejectWithValue }) {
  //3 rejectValue параметр - AsyncThunkConfig
  try {
    const response = await axios.get(
      "https://www.cbr-xml-daily.ru/daily_json.js"
    );
    return response.data.Valute;
  } catch (e) {
    return rejectWithValue("Failed to load list of currencies");
  }
});

const initialState: ChatState = {
  messages: [],
  user: { IdInstance: "", ApiTokenInstance: "" },
  entrance: true,
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
      console.log(action.payload);
      state.user = action.payload;
      state.entrance = false;
    },
    changeSearch(state, action: PayloadAction<string>) {
      //   state.searchValue = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchChat.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchChat.fulfilled, (state, action) => {
        state.messages = action.payload;
        state.loading = false;
      })

      .addMatcher(isError, (state, action: PayloadAction<string>) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export const { handleEntrance, changeSearch } = chatSlice.actions;
export default chatSlice.reducer;

function isError(action: AnyAction) {
  return action.type.endsWith("rejected");
}
