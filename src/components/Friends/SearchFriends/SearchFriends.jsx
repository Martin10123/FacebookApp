import { UserCard } from "./UserCard";

import styles from "./searchFriends.module.css";

export const SearchFriends = ({ setOpenSearchFriends }) => {
  return (
    <section className={styles.search_friends__container}>
      <div className={styles.search_friends__content}>
        <div className={styles.search_friends__header}>
          <span className={styles.search_friends__content_title}>
            <i
              className="fa-solid fa-arrow-left"
              onClick={() => setOpenSearchFriends(false)}
            ></i>
            <p className={styles.search_friends__title}>Buscar amigos</p>
            <span>x</span>
          </span>

          <div className={styles.search_friends__form}>
            <i className="fa-solid fa-magnifying-glass"></i>
            <input type="text" name="lookingFriend" placeholder="Buscar..." />
          </div>
        </div>

        <div className={styles.search_friends__users_found}>
          <UserCard />
        </div>
      </div>
    </section>
  );
};
