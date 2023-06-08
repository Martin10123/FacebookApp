import { getTimeAgo } from "../../../../helpers";
import { useCardWindownChats } from "../hook/useCardWindownChats";

import styles from "../windownChats.module.css";

export const CardWindownChats = ({
  infoUserActive,
  listUserActive,
  openWindownChat,
  userChat,
  usernameUniq,
  users,
}) => {
  const {
    idGroupOChat,
    isActiveUOG,
    isViewOrNot,
    nameUOG,
    photoUOG,
    postText,
    userWriteMessage,
  } = useCardWindownChats({
    infoUserActive,
    listUserActive,
    userChat,
    usernameUniq,
    users,
  });

  return (
    <div
      className={styles.windownChats__info_user}
      style={isViewOrNot}
      onClick={() => openWindownChat(idGroupOChat)}
    >
      <figure className={styles.windownChats__photo_user}>
        <img src={photoUOG} alt="Foto de perfil" />
        {isActiveUOG && <i className="fa-solid fa-circle"></i>}
      </figure>
      <div className={styles.windownChats__content_texts}>
        <p className={styles.windownChats__user_name}>{nameUOG}</p>
        <div className={styles.windownChats__content_lastmessage}>
          <p className={styles.windownChats__lastmessage}>
            {userWriteMessage ? "Tú: " : "Otro: "} {postText}
          </p>
          <p className={styles.windownChats__date}>
            {getTimeAgo(userChat.dateCreateMessage)}
          </p>
        </div>
      </div>
    </div>
  );
};
