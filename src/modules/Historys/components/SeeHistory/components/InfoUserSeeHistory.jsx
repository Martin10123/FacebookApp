import { photoUser } from "../../../../../assets";

import styles from "./stylesComponents.module.css";

export const InfoUserSeeHistory = () => {
  return (
    <div className={styles.see_history__info_user}>
      <div className={styles.see_history__linetime}>
        <div className={styles.see_history__line}></div>
        <div className={styles.see_history__line}></div>
        <div className={styles.see_history__line}></div>
        <div className={styles.see_history__line}></div>
      </div>

      <div className={styles.see_history__user_date}>
        <figure className={styles.see_history__photo_user}>
          <img
            alt="Foto de perfil en la historia"
            className={styles.see_history__image}
            src={photoUser}
          />
          <i className="fa-solid fa-circle"></i>

          <figcaption className={styles.see_history__name_date_time_privacity}>
            <p className={styles.see_history__name}>Martin Elias</p>
            <span className={styles.see_history__date}>2h</span>
            <i className="fa-solid fa-earth-americas"></i>
          </figcaption>
        </figure>

        <div className={styles.see_history__trash_x}>
          <i className="fa-solid fa-xmark"></i>
          <i className="fa-solid fa-trash"></i>
        </div>
      </div>
    </div>
  );
};
