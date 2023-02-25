import { LayoutCreateHistory } from "../Layout/LayoutCreateHistory";

import styles from "./selectTypeHistory.module.css";

export const SelectTypeHistory = () => {
  return (
    <LayoutCreateHistory
      noCreateName="Crear historia"
      style={{ background: "#fff", color: "#000" }}
    >
      <div className={styles.select_history__options}>
        <div className={styles.select_history__item}>
          <div className={styles.select_history__icon}>
            <p>Aa</p>
          </div>
          <p>Texto</p>
        </div>
        <div className={styles.select_history__item}>
          <div className={styles.select_history__icon}>
            <i className="fa-solid fa-music"></i>
          </div>
          <p>Musica</p>
        </div>
        <div className={styles.select_history__item}>
          <div className={styles.select_history__icon}>
            <i className="fa-solid fa-image"></i>
          </div>
          <p>Seleccionar una</p>
        </div>
        <div className={styles.select_history__item}>
          <div className={styles.select_history__icon}>
            <i className="fa-regular fa-images"></i>
          </div>
          <p>Seleccionar varias</p>
        </div>
      </div>
    </LayoutCreateHistory>
  );
};
