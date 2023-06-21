import { photoUser } from "../../../../../assets";
import { HistoryDesk } from "../../SelectTypeHistory/components/HistoryDesk";

import styles from "./stylesComponents.module.css";

export const SeeHistoryDesk = () => {
  return (
    <HistoryDesk removeRowsGrid={true}>
      <div className={styles.see_history__content_histories_all_users}>
        <div className={styles.see_history__create_history}>
          <span className={styles.see_history__plus_icon}>
            <i className="fa-solid fa-plus"></i>
          </span>

          <div className={styles.see_history__title_create_history}>
            <h4>Crear una historia</h4>
            <p>Comparte una foto o escribe algo</p>
          </div>
        </div>

        <div className={styles.see_history__all_histories}>
          <h4>Todas las historias</h4>

          <div className={styles.see_history__content_histories}>
            <div className={styles.see_history__history_user}>
              <figure className={styles.see_history__photo_user_history}>
                <img src={photoUser} alt="Foto de perfil del usuario" />
              </figure>

              <div className={styles.see_history__info_user_history}>
                <h5>Martin Elias</h5>
                <span className={styles.see_history__count_histories_time}>
                  <p>2 Nuevas</p>
                  <p>22 h</p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </HistoryDesk>
  );
};
