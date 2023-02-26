import { photoUser } from "../assets";

import styles from "./menuApp.module.css";

export const MenuDesk = () => {
  return (
    <div className={styles.navbar_desk__dropdown}>
      <figure className={styles.navbar_desk__photo_user}>
        <img src={photoUser} alt="Foto de perfil del usuario" />
        <figcaption>Martin Elias</figcaption>
      </figure>
      <ul className={styles.navbar_desk__list}>
        <li className={styles.navbar_desk__li}>
          <span className={styles.navbar_desk__icon_li}>
            <i className="fa-solid fa-moon"></i>
            {/* <i className="fa-solid fa-sun"></i> */}
          </span>
          <span className={styles.navbar_desk__span_text}>
            <p>Cambiar modo oscuro</p>
          </span>
        </li>

        <li className={styles.navbar_desk__li}>
          <span className={styles.navbar_desk__icon_li}>
            <i className="fa-solid fa-circle-question"></i>
          </span>
          <span className={styles.navbar_desk__span_text}>
            <p>Ayuda y sugerencias</p>
          </span>
        </li>

        <li className={styles.navbar_desk__li}>
          <span className={styles.navbar_desk__icon_li}>
            <i className="fa-solid fa-gear"></i>
          </span>
          <span className={styles.navbar_desk__span_text}>
            <p>Información y privacidad</p>
          </span>
        </li>

        <li className={styles.navbar_desk__li}>
          <span className={styles.navbar_desk__icon_li}>
            <i className="fa-solid fa-right-from-bracket"></i>
          </span>
          <span className={styles.navbar_desk__span_text}>
            <p>Cerrar cessión</p>
          </span>
        </li>
      </ul>
    </div>
  );
};
