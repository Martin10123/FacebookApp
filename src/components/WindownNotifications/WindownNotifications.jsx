import { photoUser } from "../../assets";

import styles from "./windownNotifications.module.css";

export const WindownNotifications = () => {
  return (
    <div className={styles.windownNoti__container}>
      <div className={styles.windownNoti__content}>
        <div className={styles.windownNoti__nav}>
          <h3>Notificaciones</h3>

          <i className="fa-solid fa-magnifying-glass"></i>
          <i className="fa-solid fa-ellipsis"></i>
        </div>

        <div className={styles.windownNoti__search}>
          <p className={styles.windownNoti__all}>Todas</p>
          <p className={styles.windownNoti__not_reading}>No Leidas</p>
        </div>

        <div className={styles.windownNoti__list_users}>
          <div className={styles.windownNoti__info_user}>
            <figure className={styles.windownNoti__photo_user}>
              <img src={photoUser} alt="Foto de perfil" />
              <i className="fa-solid fa-circle"></i>
            </figure>
            <div className={styles.windownNoti__content_type_notifi}>
              <p className={styles.windownNoti__type_notifi}>
                Karen Bolaño te etiquetó en una publicación
              </p>
              <p className={styles.windownNoti__date}>Hace 2 minutos</p>
            </div>

            <i
              className={`fa-solid fa-circle ${styles.windownNoti__btn_not_reading}`}
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
};
