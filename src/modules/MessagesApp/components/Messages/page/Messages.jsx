import { ContentMessages, FormMessage, HeaderMessages } from "../components";

import styles from "./messages.module.css";

export const Messages = ({
  infoUserActive,
  openInfoUserToMessage,
  setOpenInfoUserToMessage,
  users,
}) => {
  return (
    <div className={styles.message__container}>
      <div className={styles.message__content}>
        <HeaderMessages
          setOpenInfoUserToMessage={setOpenInfoUserToMessage}
          userMessage={openInfoUserToMessage}
          users={users}
        />

        <ContentMessages
          infoUserActive={infoUserActive}
          userMessage={openInfoUserToMessage}
        />

        <FormMessage
          infoUserActive={infoUserActive}
          userMessage={openInfoUserToMessage}
        />
      </div>
    </div>
  );
};
