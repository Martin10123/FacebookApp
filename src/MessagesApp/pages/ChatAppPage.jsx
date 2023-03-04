import { useState } from "react";
import { ChatsFilters, Messages } from "../components";

import styles from "./chat.module.css";

export const ChatAppPage = ({ setOpenChats }) => {
  const [openMessage, setOpenMessage] = useState(false);

  return (
    <div className={styles.chat__container}>
      <div className={styles.chat__content}>
        <ChatsFilters
          setOpenMessage={setOpenMessage}
          setOpenChats={setOpenChats}
        />
        {openMessage ? (
          <Messages setOpenMessage={setOpenMessage} />
        ) : (
          <div className={styles.chat_not_selected}>
            <p>Selecciona un chat</p>
          </div>
        )}
      </div>
    </div>
  );
};
