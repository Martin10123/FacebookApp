import { photoUser } from "../../../assets";

import styles from "./windownChats.module.css";

export const WindownChats = () => {
  const text = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
    fugiat totam cum modi quos reiciendis ipsam dolor aliquam
    facilis est in sapiente non enim veniam quod, officia debitis
    aspernatur assumenda?`;

  return (
    <div className={styles.windownChats__container}>
      <div className={styles.windownChats__content}>
        <div className={styles.windownChats__nav}>
          <h3>Chats</h3>

          <div className={styles.windownChats__options}>
            <i className="fa-solid fa-ellipsis"></i>
            <i className="fa-solid fa-maximize"></i>
            <i className="fa-solid fa-pen-to-square"></i>
          </div>
        </div>

        <div className={styles.windownChats__search}>
          <i className="fa-solid fa-magnifying-glass"></i>
          <input type="text" name="searchFriend" placeholder="Buscar chat..." />
        </div>

        <div className={styles.windownChats__list_users}>
          <div className={styles.windownChats__info_user}>
            <figure className={styles.windownChats__photo_user}>
              <img src={photoUser} alt="Foto de perfil" />
              <i className="fa-solid fa-circle"></i>
            </figure>
            <div className={styles.windownChats__content_texts}>
              <p className={styles.windownChats__user_name}>Martin Elias</p>
              <div className={styles.windownChats__content_lastmessage}>
                <p className={styles.windownChats__lastmessage}>
                  Tú: {text.substring(0, 30) + "..."}
                </p>
                <p className={styles.windownChats__date}>1 min</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.windownChats__view_more}>
          <p>Ver todos en messenger</p>
        </div>
      </div>
    </div>
  );
};
