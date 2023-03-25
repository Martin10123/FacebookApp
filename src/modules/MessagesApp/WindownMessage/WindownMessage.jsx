import { HeaderMessages, ContentMessages, FormMessage } from "../components";

import styles from "./windownMessage.module.css";

export const WindownMessage = () => {
  return (
    <div className={styles.windown_message__container}>
      <div className={styles.windown_message__content}>
        <HeaderMessages isWindownOpen={true} />

        <div className={styles.windown_message__box_messages}>
          <ContentMessages imgDesk={true} />
        </div>

        <FormMessage />
      </div>
    </div>
  );
};
