import React, { FC, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";

import { addChat } from "../../store/chatSlice/chatSlice";
import { activeChat } from "../../store/messagesSlice/messages.Slice";
import Header from "../Header/Header";
import BoxNewChat from "../BoxNewChat/BoxNewChat";
import MyButton from "../UI/MyButton/MyButton";
import User from "../User/User";

import AVATAR from "../../img/avatar.png";
import styles from "./Users.module.scss";

const Users: FC = () => {
  const { newChat } = useAppSelector((state) => state.chat);
  const { messages } = useAppSelector((state) => state.messages);
  const [active, setActive] = useState("");

  const dispatch = useAppDispatch();
  const handleNewChat = () => {
    dispatch(addChat());
  };

  const handleActive = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setActive(e.currentTarget.innerText);
    dispatch(activeChat(e.currentTarget.innerText));
  };
  return (
    <section className={styles.section}>
      <Header>
        <img src={AVATAR} alt="avatar" />
        <p> Профиль</p>
      </Header>
      <div className={styles.wrapper}>
        <div className={styles.newChat}>
          {newChat && <BoxNewChat />}
          <MyButton className={styles.button} onclick={handleNewChat}>
            {newChat ? "Отмена" : "Создать чат"}
          </MyButton>
          <div className={styles.contacts}>
            {messages.map((elem, id) => (
              <User
                key={id}
                active={active}
                handleActive={handleActive}
                user={elem.user}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Users;
