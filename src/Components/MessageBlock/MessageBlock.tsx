import React, { FC } from "react";

import styles from "./MessageBlock.module.scss";

interface MessageBlockProps {
  elem: string;
  myMessage: boolean;
}

const MessageBlock: FC<MessageBlockProps> = ({ elem, myMessage }) => {
  return (
    <div
      className={`${styles.messageBlock} ${
        myMessage ? styles.outMessage : styles.inMessage
      }`}
    >
      {elem}
    </div>
  );
};

export default MessageBlock;
