import { messi } from "../../../../../assets";

import styles from "./seeProductAlone.module.css";

export const SeeProductAlone = () => {
  return (
    <div className={styles.container_card_alone}>
      <div className={styles.button_close_alone}></div>
      <div className={styles.content_card_alone}>
        <div className={styles.card_alone}>
          <img src={messi} alt="Producto" />
          <p className={styles.name_product}>Messi pequeño</p>
          <div className={styles.info_aditional}>
            <p>$ 20.000</p>
            <p>Futbol</p>
            <p>Nuevo</p>
            <div className={styles.content_desc}>
              <span>Es Messi</span>
            </div>
          </div>

          <div className={styles.buttons_card_alone}>
            <button className={styles.button_alone_update}>
              <i className="fa-regular fa-pen-to-square"></i>
            </button>
            <button className={styles.button_alone_delete}>
              <i className="fa-solid fa-trash"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
