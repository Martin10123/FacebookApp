import { useState } from "react";
import { messi } from "../assets";
import { ButtonsReactions } from "../Posts";

import styles from "./modalImages.module.css";

export const ModalImages = () => {
  const [showOnlyImage, setShowOnlyImage] = useState(false);

  const hidden_info = showOnlyImage ? styles.modal_images__hidden : "";

  return (
    <>
      <section className={styles.modal_images__container}>
        <div className={styles.modal_images__content}>
          <i
            className={`${"fa-solid fa-ellipsis-vertical"} ${hidden_info}`}
          ></i>

          <figure className={styles.modal_images__photo}>
            <div
              className={styles.modal_images__hidden_other_info}
              onClick={() => setShowOnlyImage(!showOnlyImage)}
            ></div>
            <img src={messi} alt="Foto de la publicación" />
          </figure>

          <div className={`${styles.modal_images__info_post} ${hidden_info}`}>
            <div className={styles.modal_images__title_post}>
              <p>Martin Elias</p>
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                excepturi vero perspiciatis ipsa, delectus voluptas optio
                possimus sit nulla sapiente, dolorem tenetur sed labore quo
                vitae? Illo placeat vero dolorem.!
              </span>
            </div>

            <div className={styles.modal_images__content_reactions}>
              <div className={styles.modal_images__reactions_comments_share}>
                <p>851</p>
                <span className={styles.modal_images__span_comments}>
                  <p>300 comentarios</p>
                  <p>20 compartidas</p>
                </span>
              </div>

              <ButtonsReactions />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
