import { photoUser } from "../../../../assets";

import styles from "./messages.module.css";

export const HeaderMessages = ({ setOpenMessage, isWindownOpen = false }) => {
  return (
    <div className={styles.message__nav}>
      <div className={styles.message__arrow_info_user}>
        <i
          className="fa-solid fa-arrow-left"
          onClick={() => setOpenMessage(false)}
        ></i>
        <figure className={styles.message__photo_user_nav}>
          <img src={photoUser} alt="Foto de perfil" />
          <figcaption className={styles.message__figcaption}>
            <p>Martin Elias</p>
            <span>Activo(a) ahora</span>
          </figcaption>
          <i className="fa-solid fa-circle"></i>
        </figure>
      </div>

      <div className={styles.message__options}>
        <i className="fa-solid fa-phone"></i>
        <i className="fa-solid fa-video"></i>
        {isWindownOpen && <i className="fa-solid fa-window-minimize"></i>}
        {!isWindownOpen ? (
          <i className="fa-solid fa-circle-info"></i>
        ) : (
          <i className="fa-solid fa-x"></i>
        )}
      </div>
    </div>
  );
};
