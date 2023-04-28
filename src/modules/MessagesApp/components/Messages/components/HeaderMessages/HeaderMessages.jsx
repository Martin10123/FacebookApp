import { photoUser } from "../../../../../../assets";
import { getTimeAgo } from "../../../../../../helpers";

import styles from "./headerMessages.module.css";

export const HeaderMessages = ({
  isWindownOpen = false,
  userMessage,
  setOpenInfoUserToMessage,
}) => {
  const { displayName, isActive, activeAgo } = userMessage;

  return (
    <div className={styles.message__nav}>
      <div className={styles.message__arrow_info_user}>
        <i
          className="fa-solid fa-arrow-left"
          onClick={() => setOpenInfoUserToMessage(null)}
        ></i>
        <figure className={styles.message__photo_user_nav}>
          <img src={userMessage.photoUrl || photoUser} alt="Foto de perfil" />
          <figcaption className={styles.message__figcaption}>
            <p>{displayName}</p>
            <span>{isActive ? "Activo(a) ahora" : getTimeAgo(activeAgo)}</span>
          </figcaption>
          {isActive && <i className="fa-solid fa-circle"></i>}
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
