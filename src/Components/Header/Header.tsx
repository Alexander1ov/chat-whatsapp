import React, { FC, ReactNode } from "react";

import styles from "./Header.module.scss";

interface HeaderProps {
  className?: string;
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
