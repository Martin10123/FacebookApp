import { ContentMessages, FormMessage, HeaderMessages } from "../components";

import styles from "./messages.module.css";

export const Messages = ({
  infoUserActive,
  openInfoUserToMessage,
  setOpenInfoUserToMessage,
  users,
}) => {
  const userMessage = users.find(
    (user) => user.uid === openInfoUserToMessage.uid
  );

  return (
    <div className={styles.message__container}>
      <div className={styles.message__content}>
        <HeaderMessages
          userMessage={userMessage}
          setOpenInfoUserToMessage={setOpenInfoUserToMessage}
        />

        <ContentMessages
          infoUserActive={infoUserActive}
          userMessage={userMessage}
        />

        <FormMessage
          infoUserActive={infoUserActive}
          userMessage={userMessage}
        />
      </div>
    </div>
  );
};
