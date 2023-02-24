import { photoUser } from "../../../assets";

import styles from "./chatsFilters.module.css";

export const PhotoUser = ({
  height = "7rem",
  nameUser = "",
  showName = false,
}) => {
  return (
    <div style={{ height }} className={styles.filters__content_photo}>
      <figure className={styles.filters__photo_user}>
        <img src={photoUser} alt="" />
        <i className="fa-solid fa-circle"></i>
      </figure>
      <p></p>
      {showName && <p>{nameUser.substring(0, 12) + "..."}</p>}
    </div>
  );
};
