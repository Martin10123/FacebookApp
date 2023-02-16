import { messi, photoUser } from "../../assets";

import styles from "./history.module.css";

export const HistoryPage = () => {
  return (
    <section className={styles.history__container}>
      <div className={styles.history__create_history}>
        <figure className={styles.history__create_photo}>
          <img src={photoUser} alt="Foto de perfil" />
        </figure>
        <i className="fa-solid fa-circle-plus"></i>
        <p>Crear historia</p>
      </div>

      <div className={styles.history__card_info}>
        <img
          className={styles.history__card_photo_user}
          src={photoUser}
          alt="Foto de perfil"
        />

        <img className={styles.history__card_photo_select} src={messi} alt="" />

        <p>Martin Elias</p>
      </div>
      <div className={styles.history__card_info}>
        <img
          className={styles.history__card_photo_user}
          src={photoUser}
          alt="Foto de perfil"
        />

        <img className={styles.history__card_photo_select} src={messi} alt="" />

        <p>Martin Elias</p>
      </div>
      <div className={styles.history__card_info}>
        <img
          className={styles.history__card_photo_user}
          src={photoUser}
          alt="Foto de perfil"
        />

        <img className={styles.history__card_photo_select} src={messi} alt="" />

        <p>Martin Elias</p>
      </div>
      <div className={styles.history__card_info}>
        <img
          className={styles.history__card_photo_user}
          src={photoUser}
          alt="Foto de perfil"
        />

        <img className={styles.history__card_photo_select} src={messi} alt="" />

        <p>Martin Elias</p>
      </div>
      <div className={styles.history__card_info}>
        <img
          className={styles.history__card_photo_user}
          src={photoUser}
          alt="Foto de perfil"
        />

        <img className={styles.history__card_photo_select} src={messi} alt="" />

        <p>Martin Elias</p>
      </div>
    </section>
  );
};
