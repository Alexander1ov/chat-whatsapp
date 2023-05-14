import React, { useState } from "react";
import { useAppDispatch } from "../../hooks/hooks";

import { addChat, loginToChat } from "../../store/chatSlice/chatSlice";
import MyButton from "../UI/MyButton/MyButton";

import styles from "./BoxNewChat.module.scss";

const BoxNewChat = () => {
  const [tel, setTel] = useState("");
  const dispatch = useAppDispatch();
  const addNewChat = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(loginToChat(tel));
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
            placeholder="8 923 234 ****"
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
