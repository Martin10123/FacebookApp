import { ContentMessages } from "../components/ContentMessages";
import { FormMessage } from "../components/FormMessage";
import { HeaderMessages } from "../components/HeaderMessages";

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

        <div className={styles.message__box_messages}>
          <ContentMessages
            infoUserActive={infoUserActive}
            userMessage={userMessage}
          />
        </div>

        <FormMessage
          infoUserActive={infoUserActive}
          userMessage={userMessage}
        />
      </div>
    </div>
  );
};
