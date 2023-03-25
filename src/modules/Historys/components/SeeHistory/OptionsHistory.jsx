import { useCloseModal } from "../../../../hooks";

import styles from "./seeHistory.module.css";

export const OptionsHistory = ({ setOpenOptions }) => {
  const ref = useCloseModal(() => setOpenOptions(false));

  return (
    <div ref={ref} className={styles.options_history__container}>
      <div
        className={styles.options_history__close}
        onClick={() => setOpenOptions(false)}
      ></div>
      <div className={styles.options_history__content}>
        <div className={styles.options_history__item}>
          <p>Enviar por mensaje</p>
          <i className="fa-brands fa-facebook-messenger"></i>
        </div>
        <div className={styles.options_history__item}>
          <p>Eliminar historia</p>
          <i className="fa-solid fa-trash"></i>
        </div>
      </div>
    </div>
  );
};
