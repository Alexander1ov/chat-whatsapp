import React, { FC } from "react";
import { useAppSelector } from "../../hooks/hooks";

import MessageBlock from "../MessageBlock/MessageBlock";

import styles from "./ChatBackground.module.scss";

const ChatBackground: FC = () => {
  const { active, messages } = useAppSelector((state) => state.messages);

  const idx = messages.findIndex((elem) => elem.user === active);

  return (
    <div className={styles.background}>
      <div className={styles.wrapper}>
        <div>
          {messages[idx]?.message.text.map((elem, id) => {
            const myMessage = messages[idx].message.my;
            return (
              <MessageBlock key={elem + id} elem={elem} myMessage={myMessage} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ChatBackground;
