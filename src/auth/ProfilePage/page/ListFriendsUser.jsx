import { photoUser } from "../../../assets";

import styles from "./profile.module.css";

export const ListFriendsUser = () => {
  return (
    <div className={styles.profile__content_info_friends}>
      <div className={styles.profile__content_titles}>
        <span className={styles.profile__span_title_friend}>
          <p>Amigos</p>
          <p>0 amigos</p>
        </span>

        <button className={styles.profile__btn_find_friends}>
          Buscar amigos
        </button>
      </div>

      <div className={styles.profile__all_info_friends}>
        <div className={styles.profile__list_friends}>
          <figure className={styles.profile__friend_info}>
            <img src={photoUser} alt="Foto de perfil del usuario" />
            <p>Martin Elias</p>
          </figure>
        </div>
        <button className={styles.profile__see_all_friends}>
          Ver todos los amigos
        </button>
      </div>
    </div>
  );
};
