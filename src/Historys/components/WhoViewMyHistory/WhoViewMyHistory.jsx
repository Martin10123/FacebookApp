import { photoUser } from "../../../assets";
import { LayoutCreateHistory } from "../Layout/LayoutCreateHistory";

import styles from "./whoViewMyHistory.module.css";

export const WhoViewMyHistory = () => {
  return (
    <LayoutCreateHistory
      noCreateName="Vieron tu historia"
      style={{ background: "#fff" }}
    >
      <div className={styles.who_view__list_users}>
        <figure className={styles.who_view__photo}>
          <img src={photoUser} alt="Foto de perfil usuario" />
          <figcaption>Martin Elias</figcaption>
        </figure>
      </div>
    </LayoutCreateHistory>
  );
};
