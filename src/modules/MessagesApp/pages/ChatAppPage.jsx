import { useContext, useState } from "react";
import { ChatsFilters, Messages } from "../components";
import { AuthUserContext } from "../../../context";

import styles from "./chat.module.css";

export const ChatAppPage = ({ setOpenChats }) => {
  const { infoUserActive, users } = useContext(AuthUserContext);
  const [openInfoUserToMessage, setOpenInfoUserToMessage] = useState(null);

  return (
    <div className={styles.chat__container}>
      <div className={styles.chat__content}>
        <ChatsFilters
          infoUserActive={infoUserActive}
          setOpenChats={setOpenChats}
          setOpenInfoUserToMessage={setOpenInfoUserToMessage}
          users={users}
        />

        {openInfoUserToMessage ? (
          <Messages
            infoUserActive={infoUserActive}
            openInfoUserToMessage={openInfoUserToMessage}
            setOpenInfoUserToMessage={setOpenInfoUserToMessage}
            users={users}
          />
        ) : (
          <div className={styles.chat_not_selected}>
            <p>Selecciona un chat</p>
          </div>
        )}
      </div>
    </div>
  );
};
