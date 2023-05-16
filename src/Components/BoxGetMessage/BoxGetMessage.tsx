import React, { FC, useEffect } from "react";

import { User } from "../../store/chatSlice/chatSliceTypes";
import {
  dequeueMessages,
  getMessages,
} from "../../store/messages/messages.Slice";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import MyButton from "../UI/MyButton/MyButton";

import styles from "./BoxGetMessage.module.scss";

interface ChatBoxGetMessage {
  user: User;
}
const BoxGetMessage: FC<ChatBoxGetMessage> = ({ user }) => {
  const { lastMessage } = useAppSelector((state) => state.messages);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (lastMessage.receiptId !== "") {
      dispatch(
        dequeueMessages({
          idInstance: user.IdInstance,
          apiTokenInstance: user.ApiTokenInstance,
          receiptId: lastMessage.receiptId,
        })
      );
    }
  }, [lastMessage.receiptId, lastMessage.state]);
  const loadMessages = () => {
    dispatch(
      getMessages({
        idInstance: user.IdInstance,
        apiTokenInstance: user.ApiTokenInstance,
      })
    );
  };

  return (
    <div className={styles.newMessage}>
      <MyButton
        className={styles.button}
        children="Обновить входящие сообщения"
        onclick={loadMessages}
      />
    </div>
  );
};

export default BoxGetMessage;
