import { photoUser } from "../../assets";

import styles from "./formPost.module.css";

export const FormPost = () => {
  return (
    <div className={styles.post__container}>
      <div className={styles.post__content}>
        <img
          className={styles.post__info_user_active}
          src={photoUser}
          alt="Foto de perfil"
        />

        <div className={styles.post__title}>
          <p>¿Que estas pensando?</p>
        </div>

        <i className="fa-solid fa-images"></i>
      </div>

      <div className={styles.post__content_options}>
        <div className={styles.post__option_item}>
          <i className="fa-solid fa-images"></i>
          <p>Foto/Video</p>
        </div>
        <div className={styles.post__option_item}>
          <i className="fa-solid fa-video"></i>
          <p>Videos en vivo</p>
        </div>
      </div>
    </div>
  );
};
