import React, { FC } from "react";

import AVATAR from "../../img/avatar.png";
import styles from "./Users.module.scss";
import Header from "../Header/Header";
import BoxNewChat from "../BoxNewChat/BoxNewChat";

const Users: FC = () => {
  return (
    <section className={styles.section}>
      <Header>
        <img src={AVATAR} alt="avatar" />
        <p> Профиль</p>
      </Header>
      <div className={styles.wrapper}>
        <BoxNewChat />
      </div>
    </section>
  );
};

export default Users;
