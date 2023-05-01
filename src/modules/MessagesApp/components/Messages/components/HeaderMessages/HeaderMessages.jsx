import { photoUser, register } from "../../../../../../assets";
import { getTimeAgo } from "../../../../../../helpers";

import styles from "./headerMessages.module.css";

export const HeaderMessages = ({
  isWindownOpen = false,
  userMessage,
  setOpenInfoUserToMessage,
  users,
}) => {
  const thereUserActive = users.some((user) => {
    if (userMessage?.usersFriends?.includes(user.uid)) {
      if (user.isActive) {
        return true;
      } else {
        return false;
      }
    }
  });

  const dataHeader = userMessage?.isGroup
    ? {
        activeAgo: false,
        displayName: userMessage?.nameGroup,
        isActive: thereUserActive,
        photoUrl: userMessage?.photoGroup || register,
      }
    : {
        activeAgo: userMessage?.activeAgo,
        displayName: userMessage?.displayName,
        isActive: userMessage?.isActive,
        photoUrl: userMessage?.photoUrl || photoUser,
      };

  return (
    <div className={styles.message__nav}>
      <div className={styles.message__arrow_info_user}>
        <i
          className="fa-solid fa-arrow-left"
          onClick={() => setOpenInfoUserToMessage(null)}
        ></i>
        <figure className={styles.message__photo_user_nav}>
          <span className={styles.message__photoUser_active}>
            <img src={dataHeader.photoUrl} alt="Foto de perfil" />
            {dataHeader.isActive && <i className="fa-solid fa-circle"></i>}
          </span>
          <figcaption className={styles.message__figcaption}>
            <p>{dataHeader.displayName}</p>

            <span>
              {dataHeader.isActive
                ? "Activo(a) ahora"
                : `Hace ${getTimeAgo(dataHeader.activeAgo)}`}
            </span>
          </figcaption>
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
