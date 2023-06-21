import { notFound404 } from "../../../../../assets";

import styles from "../page/imagesHistory.module.css";

export const ImagesHistoryMobile = () => {
  return (
    <div className={styles.image__history__content}>
      <div className={styles.image__history__nav}>
        <i className="fa-solid fa-chevron-left"></i>
        <h3>Vista previa</h3>
        <span>x</span>
      </div>

      <div className={styles.image__history__content_carrousel}>
        <div className={styles.image__history__list_images}>
          <div className={styles.image__history__item_image}>
            <div className={styles.image__history__list_nav}>
              <i className="fa-solid fa-xmark"></i>
            </div>

            <figure className={styles.image__history__show_image}>
              <img src={notFound404} alt="Imagen de la historia previa" />
            </figure>
          </div>

          <div className={styles.image__history__item_add_more_image}>
            <div className={styles.image__history__add_more_title}>
              <i className="fa-regular fa-images"></i>
              <p className={styles.image__history__add_more_images}>
                Agregar más
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.image__history__footer_history}>
        <span className={styles.image__history__setting}>
          <i className="fa-solid fa-user-gear"></i>
          <p>Privacidad</p>
        </span>

        <button className={styles.image__history__btn_create}>Compartir</button>
      </div>
    </div>
  );
};
