import { photoUser } from "../../assets";
import { ButtonForm } from "../Auth/helpers";

import styles from "./eventsBirthday.module.css";

export const EventsBirthday = () => {
  return (
    <section className={styles.events__container}>
      <div className={styles.events__header}>
        <i className="fa-solid fa-arrow-left"></i>
        <p>Eventos</p>
        <i className="fa-solid fa-magnifying-glass"></i>
      </div>
      <div className={styles.events__content}>
        <h2 className={styles.events__title}>Cumpleaños de hoy</h2>

        <div className={styles.events__list_users}>
          <div className={styles.events__user_item}>
            <figure className={styles.events__user_photo}>
              <img src={photoUser} alt="Foto de perfil del usuario" />
              <figcaption className={styles.events__user_info}>
                <p>Martin Elias</p>
                <span>18 de abril 2001 (20 años)</span>
              </figcaption>
            </figure>

            <ButtonForm title="Mensaje" />
          </div>
        </div>
      </div>
    </section>
  );
};
