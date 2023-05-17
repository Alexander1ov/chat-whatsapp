import React, { FC, ReactNode } from "react";

import styles from "./Header.module.scss";

interface HeaderProps {
  children: ReactNode;
}

const Header: FC<HeaderProps> = ({ children }) => {
  return (
    <header className={styles.header}>
      <div className={styles.user}>{children}</div>
    </header>
  );
};

export default Header;
