import React, { FC } from "react";

import styles from "./MyButton.module.scss";
interface ButtonProps {
  className?: string;
  children: string;
  onclick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
const MyButton: FC<ButtonProps> = ({ children, className, onclick }) => {
  return (
    <button className={`${styles.button} ${className}`} onClick={onclick}>
      {children}
    </button>
  );
};

export default MyButton;
