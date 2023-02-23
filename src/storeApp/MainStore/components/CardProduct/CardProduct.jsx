import { messi } from "../../../../assets";

import styles from "./cardProduct.module.css";

export const CardProduct = () => {
  return (
    <div className={styles.card__content_card}>
      <figure className={styles.card__image}>
        <img src={messi} alt="Producto" />
      </figure>

      <div className={styles.card__info_product}>
        <div className={styles.card__prices_state_product}>
          <p className={styles.card__name_product}>Messi</p>

          <p>$ 20.000</p>
          <p>Futbol</p>
          <p>Nuevo</p>
        </div>

        <div className={styles.card__buttons_products}>
          <button className={styles.card__button_product}>
            <i className="fa-regular fa-circle-user"></i>
          </button>

          <button className={styles.card__button_product}>
            <i className="fa-regular fa-message"></i>
          </button>
          <button className={styles.card__button_product}>
            <i className="fa-solid fa-heart"></i>
          </button>
        </div>
      </div>
    </div>
  );
};
