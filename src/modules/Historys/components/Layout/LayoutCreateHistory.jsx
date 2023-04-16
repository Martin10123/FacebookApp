import styles from "./layoutHistory.module.css";

export const LayoutCreateHistory = ({
  children,
  disabledBotton,
  isCreate,
  noCreateName,
  onCloseModal,
  onCreateHistory,
  style,
}) => {
  return (
    <section className={styles.create_history__container}>
      <div style={style} className={styles.create_history__content}>
        {isCreate && (
          <div className={styles.create_history__nav}>
            <button
              className={styles.create_history__btn_close}
              disabled={disabledBotton}
              onClick={onCloseModal}
            >
              X
            </button>
            <button
              className={styles.create_history__create_history}
              disabled={disabledBotton}
              onClick={onCreateHistory}
            >
              {disabledBotton ? "Creando..." : "Listo"}
            </button>
          </div>
        )}

        {!isCreate && (
          <div className={styles.select_history__nav}>
            <button
              className={styles.select_history__btn_close}
              disabled={disabledBotton}
              onClick={onCloseModal}
            >
              X
            </button>
            <p>{noCreateName}</p>
            <i className="fa-solid fa-gear"></i>
          </div>
        )}

        {children}
      </div>
    </section>
  );
};
