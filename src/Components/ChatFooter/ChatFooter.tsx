import React, { FC, useState } from "react";
import { useAppDispatch } from "../../hooks/hooks";

import { postMessage, sendMessages } from "../../store/messages/messages.Slice";

import ARROW from "../../img/arrow.png";
import styles from "./ChatFooter.module.scss";

interface ChatFooterProps {
  active: string;
}

const ChatFooter: FC<ChatFooterProps> = ({ active }) => {
  const [textMessages, setTextValues] = useState("");

  const dispatch = useAppDispatch();

  const sendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!active || !textMessages) return;
    dispatch(postMessage([active, textMessages]));
    setTextValues("");

    // dispatch(
    //   sendMessages({
    //     chatId: "79159985744@c.us",
    //     message: "I use Green-API to send this message to you!",
    //   })
    // );
  };
  return (
    <div className={styles.sendMessage}>
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
