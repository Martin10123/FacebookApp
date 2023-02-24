import { PhotoUser } from "./PhotoUser";

import styles from "./chatsFilters.module.css";

export const ChatsFilters = ({ setOpenMessage }) => {
  return (
    <div className={styles.filters__container}>
      <div className={styles.filters__content}>
        <div className={styles.filters__nav}>
          <h2>Chats</h2>

          <span className={styles.filters__icon}>
            <i className="fa-solid fa-users-line"></i>
          </span>
        </div>

        <div className={styles.filters__content_users}>
          <div className={styles.filters__input_form}>
            <i className="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder="Buscar..." />
          </div>

          <div
            className={styles.filters__contain_scroll_users_actives}
            onClick={() => setOpenMessage(true)}
          >
            <PhotoUser showName={true} nameUser="Martin Elias" />
          </div>

          <div className={styles.filters__list_users_chats}>
            <div
              className={styles.filters__list_item}
              onClick={() => setOpenMessage(true)}
            >
              <PhotoUser
                height="fit-content"
                nameUser="Martin Elias"
                showName={false}
              />

              <div className={styles.filters__item_name}>
                <p>Martin Elias</p>

                <span className={styles.filters__content_last_message}>
                  <p className={styles.filters__last_message}>
                    tú: hola {"Jsdffsdsdff dsDSFJ skjdffs kj sdfkj fsdkjsdf"}
                  </p>

                  <p>12:40 p.m</p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
