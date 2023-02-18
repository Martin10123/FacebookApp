import { messi } from "../../../../assets";

import styles from "./cardProduct.module.css";

export const CardProduct = () => {
  return (
    <div className={styles.content_card}>
      <figure className={styles.image}>
        <img src={messi} alt="Producto" />
      </figure>

      <div className={styles.info_product}>
        <div className={styles.prices_state_product}>
          <p className={styles.name_product}>Messi</p>

          <p>$ 20.000</p>
          <p>Futbol</p>
          <p>Nuevo</p>
        </div>

        <div className={styles.buttons_products}>
          <button className={styles.button_product}>
            <i className="fa-regular fa-circle-user"></i>
          </button>

          <button className={styles.button_product}>
            <i className="fa-regular fa-message"></i>
          </button>
          <button className={styles.button_product}>
            <i className="fa-solid fa-heart"></i>
          </button>
        </div>
      </div>
    </div>
  );
};
