import React, { useState } from "react";
import { useAppDispatch } from "../../hooks/hooks";

import { addChat } from "../../store/chatSlice/chatSlice";
import { messagesChat } from "../../store/messages/messages.Slice";
import MyButton from "../UI/MyButton/MyButton";

import styles from "./BoxNewChat.module.scss";

const BoxNewChat = () => {
  const [tel, setTel] = useState("");
  const dispatch = useAppDispatch();
  const addNewChat = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(messagesChat(tel));
    dispatch(addChat());
    setTel("");
  };

  return (
    <div className={styles.newChat}>
      <div className={styles.content}>
        <p>Введите номер телефона получателя:</p>
        <form onSubmit={addNewChat}>
          <input
            required
            type="tel"
            placeholder="7923234****"
            value={tel}
            onChange={(e) => {
              setTel(e.target.value);
            }}
          />
          <MyButton>Создать</MyButton>
        </form>
      </div>
    </div>
  );
};

export default BoxNewChat;
