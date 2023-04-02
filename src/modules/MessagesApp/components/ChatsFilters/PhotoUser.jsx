import { photoUser } from "../../../../assets";

import styles from "./chatsFilters.module.css";

export const PhotoUser = ({
  height = "7rem",
  isActive,
  nameUser = "",
  photoUrl,
  showName = false,
}) => {
  return (
    <div style={{ height }} className={styles.filters__content_photo}>
      <figure className={styles.filters__photo_user}>
        <img
          src={photoUrl || photoUser}
          alt={`Foto de perfil de ${nameUser}`}
        />
        <i
          className={`fa-solid fa-circle ${
            !isActive ? styles.filters__user_no_active : ""
          }`}
        ></i>
      </figure>
      {showName && <p>{nameUser.substring(0, 12) + "..."}</p>}
    </div>
  );
};
