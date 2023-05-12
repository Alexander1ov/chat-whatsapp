import React from "react";

import AVATAR from "../../img/avatar.png";
import ARROW from "../../img/arrow.png";
import styles from "./Users.module.scss";

const Users = () => {
  return (
    <section className={styles.section}>
      <header className={styles["section-header"]}>
        <div className={styles.user}>
          <img src={AVATAR} alt="avatar" />
          <p> Иван Иванов 8 923 234 2342</p>
        </div>
      </header>
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

export default Users;
