import React from "react";

import AVATAR from "../../img/avatar.png";
import ARROW from "../../img/arrow.png";
import styles from "./Chat.module.scss";
import Header from "../Header/Header";

const Chat = () => {
  return (
    <section className={styles.section}>
      <Header>
        <img src={AVATAR} alt="avatar" />
        <p> 8 923 234 ****</p>
      </Header>
      <div className={styles.messages}></div>
      <div className={styles["messages-new"]}>
        <input type="text" placeholder="Введите сообщение" />
        <button>
          <img src={ARROW} alt="arrow" />
        </button>
      </div>
    </section>
  );
};

export default Chat;
