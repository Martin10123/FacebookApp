import { photoUser } from "../../../../assets";

import styles from "../sideMessage.module.css";

export const CardChatMessage = ({
  displayName,
  isActive,
  openWindownChat,
  otherData,
  photoUrl,
}) => {
  return (
    <div
      className={styles.sideMessage__list_item}
      onClick={() => openWindownChat(otherData.uid)}
    >
      <figure className={styles.sideMessage__photo_user}>
        <img src={photoUrl || photoUser} alt="Foto de perfil" />
        {isActive && <i className="fa-solid fa-circle"></i>}
      </figure>
      <p>{displayName}</p>
    </div>
  );
};
