import { photoUser } from "../../../assets";

import styles from "./history.module.css";

export const CardHistoryMain = () => {
  return (
    <div className={styles.history__card_info}>
      <img
        className={styles.history__card_photo_user}
        src={photoUser}
        alt="Foto de perfil"
      />

      <img
        className={styles.history__card_photo_select}
        src={photoUser}
        alt=""
      />

      {false && (
        <div className={styles.history__text_card}>
          <p>fgddg</p>
        </div>
      )}

      <p>Martin</p>
    </div>
  );
};
