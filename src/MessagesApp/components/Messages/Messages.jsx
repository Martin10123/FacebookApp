import { ContentMessages } from "./ContentMessages";
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

        <form className={styles.message__form_message}>
          <div className={styles.message__input_form}>
            <i className="fa-solid fa-camera"></i>
            <input type="text" placeholder="Mensaje..." />
          </div>

          <button className={styles.message__btn_send_message} type="submit">
            <i className="fa-regular fa-paper-plane"></i>
          </button>
        </form>
      </div>
    </div>
  );
};
