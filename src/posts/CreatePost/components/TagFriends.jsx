import { photoUser } from "../../../assets";

import styles from "./tags.module.css";

export const TagFriends = ({
  listTagFriends,
  setListTagFriends,
  setOpenTagFriends,
}) => {
  return (
    <div className={styles.tag__container}>
      <div className={styles.tag__content}>
        <div className={styles.tag__nav}>
          <div
            className={styles.tag__btn_close}
            onClick={() => setOpenTagFriends(false)}
          >
            <i className="fa-solid fa-arrow-left"></i>
          </div>
          <p>Etiquetar amigos</p>
          <div></div>
        </div>

        <div className={styles.tag__input_form}>
          <i className="fa-solid fa-magnifying-glass"></i>
          <input type="text" placeholder="Buscar..." />
        </div>

        <h2>Todos los amigos</h2>

        <div className={styles.tag__content_users}>
          <div className={styles.tag__info_user}>
            <figure className={styles.tag__user_img_name}>
              <img src={photoUser} alt="" />
              <figcaption>Martin Elias</figcaption>
            </figure>

            <div className={styles.tag__check_user}>
              <i className="fa-solid fa-check"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
