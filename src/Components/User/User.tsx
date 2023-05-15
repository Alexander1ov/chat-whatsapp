import React, { FC } from "react";

import AVATAR from "../../img/avatar.png";
import styles from "./User.module.scss";

interface UserProps {
  children: string;
  active: string;
  handleActive: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const User: FC<UserProps> = ({ children, active, handleActive }) => {
  console.log(children);

  return (
    <div
      className={`${styles.wrapper} ${active === children && styles.active}`}
      onClick={handleActive}
    >
      <img src={AVATAR} alt="avatar" />
      <p> {children}</p>
    </div>
  );
};

export default User;
