import { photoUser } from "../../../../assets";

import styles from "./whoViewMyHistory.module.css";

export const WhoViewMyHistory = () => {
  return (
    <div className={styles.who_view__list_users}>
      <figure className={styles.who_view__photo}>
        <img src={photoUser} alt="Foto de perfil usuario" />
        <figcaption>Hola mundo</figcaption>
      </figure>
    </div>
  );
};
