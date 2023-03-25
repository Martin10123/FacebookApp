import { ButtonForm } from "../../Auth/helpers";

import styles from "./editComment.module.css";

export const EditComment = () => {
  return (
    <div className={styles.update__container}>
      <div className={styles.update__content}>
        <div className={styles.update__nav}>
          <span>x</span>
          <p>Editar comentario</p>
          <button className={styles.update__btn_close}>X</button>
        </div>

        <textarea
          name=""
          className={styles.update__text}
          placeholder="Actualizar..."
        />

        <div className={styles.update__btn_update}>
          <ButtonForm title="Actualizar" />
        </div>
      </div>
    </div>
  );
};
