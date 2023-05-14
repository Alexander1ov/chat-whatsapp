import React from "react";

import styles from "./BoxNewChat.module.scss";

const BoxNewChat = () => {
  return (
    <div className={styles.newChat}>
      <div className={styles.content}>
        <p>Введите номер телефона получателя:</p>
        <form>
          <input type="tel" placeholder="8 923 234 ****" />
          <button>Создать</button>
        </form>
      </div>
    </div>
  );
};

export default BoxNewChat;
