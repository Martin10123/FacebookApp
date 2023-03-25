import { photoUser } from "../../../assets";
import { PhotoUser } from "../../../modules";
import { ShareInItem } from "./ShareInItem";

import styles from "./sharePost.module.css";

export const SharePost = () => {
  return (
    <div className={styles.share__container}>
      <div className={styles.share__close_modal_share}></div>
      <div className={styles.share__content}>
        <div className={styles.share__writte_post}>
          <figure className={styles.share__photo_user}>
            <img src={photoUser} alt="Foto de perfil del usuario" />
            <figcaption className={styles.share__figcaption}>
              <p>Martin Elias</p>
              <select name="" id="" className={styles.share__select_state}>
                <option value="Publico">Publico</option>
                <option value="Solo amigos">Solo amigos</option>
                <option value="Solo yo">Solo yo</option>
              </select>
            </figcaption>
          </figure>

          <div className={styles.share__content_textarea}>
            <textarea name="" id="" placeholder="Haz un comentario..." />
          </div>

          <div className={styles.share__btn_share}>
            <button>Compartir ahora</button>
          </div>
        </div>

        <p className={styles.share__content_send_message}>Enviar por mensaje</p>

        <div className={styles.share__scroll_users}>
          <PhotoUser showName={true} nameUser="Martin Elias" />
        </div>

        <p className={styles.share__content_send_message}>Compartir en </p>

        <ShareInItem />
      </div>
    </div>
  );
};
