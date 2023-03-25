import { photoUser } from "../../../assets";

import styles from "./searchFriends.module.css";

export const UserCard = () => {
  return (
    <div className={styles.search_friends__user}>
      <figure className={styles.search_friends__photo_user}>
        <img src={photoUser} alt="Foto de perfil" />
      </figure>
      <span className={styles.search_friends__span}>
        <p>Martin Elias</p>
        <p>Amigos</p>
      </span>

      <button
        className={`${styles.search__add_friend} ${styles.search__friend}`}
      >
        <span>Amigos</span>
      </button>
    </div>
  );
};
