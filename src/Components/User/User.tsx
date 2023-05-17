import React, { FC } from "react";

import AVATAR from "../../img/avatar.png";
import styles from "./User.module.scss";

interface UserProps {
  user: string;
  active: string;
  handleActive: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const User: FC<UserProps> = ({ user, active, handleActive }) => {
  return (
    <div
      className={`${styles.wrapper} ${active === user && styles.active}`}
      onClick={handleActive}
    >
      <img src={AVATAR} alt="avatar" />
      <p> {user}</p>
    </div>
  );
};

export default User;
