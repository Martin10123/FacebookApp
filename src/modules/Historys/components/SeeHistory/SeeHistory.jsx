import { OptionsHistory } from "./OptionsHistory";
import { photoUser } from "../../../../assets";

import styles from "./seeHistory.module.css";

export const SeeHistory = () => {
  return (
    <>
      <div className={styles.see_history__container}>
        <div className={styles.see_history__content}>
          <div className={styles.see_history__header}>
            <div className={styles.see_history__timeline}>
              <div className={styles.see_history__line}></div>
            </div>

            <div className={styles.see_history__info_user}>
              <figure className={styles.see_history__photo_user}>
                <img src={photoUser} alt="Foto de perfil del usuario" />
                <figcaption>
                  Martin Elias
                  <p>30 min</p>
                </figcaption>
              </figure>

              <span>
                <i className="fa-solid fa-ellipsis"></i>
                <i className="fa-solid fa-x"></i>
              </span>

              {false && <OptionsHistory />}
            </div>
          </div>

          {true && (
            <div className={styles.see_history__text}>
              <p>hola</p>
            </div>
          )}

          {false && (
            <figure className={styles.see_history__image}>
              <img src={photoUser} alt="Foto de la historia" />
            </figure>
          )}

          <div className={styles.see_history__send_message}>
            <div className={styles.see_history__count_view_history}>
              <p>0</p>
              <i className="fa-regular fa-eye"></i>
            </div>

            <div className={styles.see_history__input_form}>
              <i className="fa-brands fa-facebook-messenger"></i>
              <p>Enviar mensaje...</p>
            </div>
          </div>
        </div>

        <button className={styles.see_history__button_prev}>
          <i className="fa-solid fa-arrow-left"></i>
        </button>
        <button className={styles.see_history__button_next}>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </>
  );
};
