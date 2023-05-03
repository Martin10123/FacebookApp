import styles from "./groupComponents.module.css";

export const LayoutGroup = ({
  children,
  disabledButton,
  nameModal,
  showBotton = false,
  onCloseModal,
  onSentForm,
}) => {
  return (
    <div className={styles.photo_group__container}>
      <div className={styles.photo_group__content}>
        <div className={styles.photo_group__nav}>
          <i
            className="fa-solid fa-arrow-left"
            onClick={onCloseModal}
            style={{ pointerEvents: disabledButton ? "none" : "" }}
          ></i>
          <p>{nameModal}</p>
        </div>

        {children}

        {showBotton && (
          <div className={styles.photo_group__buttons}>
            <button
              className={styles.photo_group__save}
              disabled={disabledButton}
              onClick={onSentForm}
            >
              {disabledButton ? "Guardando..." : "Guardar"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
