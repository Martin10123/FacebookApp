import { usePreventScroll } from "../../hooks";

import styles from "./sureDelete.module.css";

export const SureDelete = ({
  buttonText,
  confirmationMessage,
  onClose,
  onDelete,
}) => {
  usePreventScroll();

  return (
    <div className={styles.delete__container}>
      <div className={styles.delete__content}>
        <div className={styles.delete__header}>
          <span>a</span>
          <p>Borrar</p>
          <button className={styles.delete__btn_close} onClick={onClose}>
            X
          </button>
        </div>

        <p className={styles.delete__title}>
          {confirmationMessage ||
            "¿Está seguro de que desea eliminar este elemento?"}
        </p>
        <button className={styles.delete__btn_delete} onClick={onDelete}>
          {buttonText || "Eliminar"}
        </button>
      </div>
    </div>
  );
};
