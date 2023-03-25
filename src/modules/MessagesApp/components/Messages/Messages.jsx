import { ContentMessages } from "./ContentMessages";
import { FormMessage } from "./FormMessage";
import { HeaderMessages } from "./HeaderMessages";

import styles from "./messages.module.css";

export const Messages = ({ setOpenMessage }) => {
  return (
    <div className={styles.message__container}>
      <div className={styles.message__content}>
        <HeaderMessages setOpenMessage={setOpenMessage} />

        <div className={styles.message__box_messages}>
          <ContentMessages />
        </div>

        <FormMessage />
      </div>
    </div>
  );
};
