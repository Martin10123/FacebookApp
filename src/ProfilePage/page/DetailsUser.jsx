import styles from "./profile.module.css";

export const DetailsUser = () => {
  return (
    <div className={styles.profile__info_details}>
      <div className={styles.profile__titles_post}>
        <p>Posts</p>
      </div>

      <h3 className={styles.title_details}>Detalles</h3>

      <ul className={styles.profile__list_details}>
        <li className={styles.profile__list_item}>
          <i className="fa-solid fa-briefcase"></i>
          No trabajo mis padres me mantiene
        </li>
        <li className={styles.profile__list_item}>
          <i className="fa-solid fa-briefcase"></i>
          No trabajo mis padres me mantiene
        </li>
        <button className={styles.profile__edit_public_details}>
          Editar detalles
        </button>
      </ul>
    </div>
  );
};
