import { photoUser } from "../../assets";

import styles from "./formPost.module.css";

export const FormPost = () => {
  return (
    <div className={styles.post__container}>
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
  );
};
