import { photoUser } from "../../../../assets";
import { getTimeAgo } from "../../../../helpers";

import styles from "./chatsFilters.module.css";

export const PhotoUser = ({
  activeAgo,
  height = "7rem",
  isActive,
  nameUser = "",
  onGoToMessage,
  photoUrl,
  showActiveAgo = false,
  showName = false,
}) => {
  console.log();

  return (
    <div
      className={styles.filters__content_photo}
      onClick={onGoToMessage}
      style={{ height }}
    >
      <figure className={styles.filters__photo_user}>
        <img
          src={photoUrl || photoUser}
          alt={`Foto de perfil de ${nameUser}`}
        />

        {isActive ? (
          <i
            className={`fa-solid fa-circle ${
              !isActive ? styles.filters__user_no_active : ""
            }`}
          ></i>
        ) : (
          <>
            {showActiveAgo && (
              <span>
                {!getTimeAgo(activeAgo).endsWith(new Date().getFullYear()) &&
                  getTimeAgo(activeAgo)}
              </span>
            )}
          </>
        )}
      </figure>
      {showName && <p>{nameUser.substring(0, 12) + "..."}</p>}
    </div>
  );
};
