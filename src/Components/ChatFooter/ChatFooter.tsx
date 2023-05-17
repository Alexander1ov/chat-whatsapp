import React, { FC, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";

import { postMessage, sendMessages } from "../../store/messagesSlice/messages.Slice";
import BoxGetMessage from "../BoxGetMessage/BoxGetMessage";

import ARROW from "../../img/arrow.png";
import styles from "./ChatFooter.module.scss";

interface ChatFooterProps {
  active: string;
}

const ChatFooter: FC<ChatFooterProps> = ({ active }) => {
  const { user } = useAppSelector((state) => state.chat);
  const [textMessages, setTextValues] = useState("");
  const dispatch = useAppDispatch();

  const sendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!active || !textMessages) return;
    dispatch(postMessage([active, textMessages]));
    dispatch(
      sendMessages({
        idInstance: user.IdInstance,
        apiTokenInstance: user.ApiTokenInstance,
        chatId: active + "@c.us",
        message: textMessages,
      })
    );
    setTextValues("");
  };
  return (
    <div className={styles.sendMessage}>
      <BoxGetMessage user={user} />
      <form onSubmit={sendMessage}>
        <input
          type="text"
          placeholder="Введите сообщение"
          onChange={(e) => {
            setTextValues(e.target.value);
          }}
          value={textMessages}
        />
        <button>
          <img src={ARROW} alt="arrow" />
        </button>
      </form>
    </div>
  );
};

export default ChatFooter;
