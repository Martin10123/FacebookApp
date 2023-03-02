import { useCloseModal } from "../../hooks";

import styles from "./cardPost.module.css";

export const OptionsPost = ({ isAtBottom, setOpenOptions }) => {
  const ref = useCloseModal(() => setOpenOptions(false));

  return (
    <div
      ref={ref}
      className={styles.options_post__container}
      style={{ top: isAtBottom ? "-15rem" : "" }}
    >
      <div className={styles.options_post__close_modal}></div>
      <div className={styles.options_post__content}>
        <div className={styles.options_post_info}>
          <div className={styles.options_post__item}>
            <i className="fa-solid fa-bookmark"></i>
            <p>Guardar publicación</p>
          </div>
          <div className={styles.options_post__item}>
            <i className="fa-solid fa-pen"></i>
            <p>Editar publicación</p>
          </div>
          <div className={styles.options_post__item}>
            <i className="fa-solid fa-trash-can"></i>
            <p>Eliminar publicación</p>
          </div>
          <div className={styles.options_post__item}>
            <i className="fa-solid fa-copy"></i>
            <p>Copiar enlace</p>
          </div>
        </div>
      </div>
    </div>
  );
};
