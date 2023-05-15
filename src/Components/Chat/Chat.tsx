import React from "react";
import { useAppSelector } from "../../hooks/hooks";

import Header from "../Header/Header";
import ChatBackground from "../ChatBackground/ChatBackground";
import ChatFooter from "../ChatFooter/ChatFooter";

import AVATAR from "../../img/avatar.png";
import styles from "./Chat.module.scss";

const Chat = () => {
  const { active } = useAppSelector((state) => state.messages);

  return (
    <section className={styles.section}>
      <Header>
        <img src={AVATAR} alt="avatar" />
        <p> {!active ? "Нет активных чатов" : active}</p>
      </Header>
      <ChatBackground />
      <ChatFooter active={active} />
    </section>
  );
};

export default Chat;
