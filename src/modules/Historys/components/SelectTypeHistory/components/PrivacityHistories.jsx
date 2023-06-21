import { ItemPrivacity } from "./ItemPrivacity";
import styles from "./componentsStyles.module.css";

export const PrivacityHistories = ({ setOpenSettings }) => {
  return (
    <div className={styles.privacity__container}>
      <div className={styles.privacity__content}>
        <div className={styles.privacity__nav}>
          <h3>Privacidad de la historia</h3>
        </div>

        <div className={styles.privacity__who_see_history}>
          <span className={styles.privacity__title_who_see_history}>
            <h4>¿Quién puede ver tu historia?</h4>
            <p>Tu historia se verá en Facebook y Messenger durante 24 horas.</p>
          </span>

          <ul className={styles.privacity__list_options}>
            <ItemPrivacity
              descrip="Cualquiera en Facebook o Messenger"
              icon="fa-solid fa-earth-americas"
              type="Publico"
            />
            <ItemPrivacity
              descrip="Solo tus amigos de Facebook"
              icon="fa-solid fa-user-group"
              type="Amigos"
            />
            <ItemPrivacity
              descrip="Solo tú podras ver esta historia"
              icon="fa-solid fa-child"
              type="Solo yo"
            />
          </ul>
        </div>

        <div className={styles.privacity__other_options}>
          <h2>Otras opciones</h2>
          <ItemPrivacity
            descrip="Actualmente activados para todas las historias"
            icon="fa-brands fa-facebook-messenger"
            type="Enviar mensajes"
          />
        </div>

        <div className={styles.privacity__buttons}>
          <button
            className={styles.privacity__btn_cancel}
            onClick={() => setOpenSettings(false)}
          >
            Cancelar
          </button>
          <button className={styles.privacity__btn_save}>Guardar</button>
        </div>
      </div>
    </div>
  );
};
