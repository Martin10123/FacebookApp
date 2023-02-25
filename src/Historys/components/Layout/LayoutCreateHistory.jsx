import styles from "./layoutHistory.module.css";

export const LayoutCreateHistory = ({
  children,
  isCreate,
  noCreateName,
  style,
}) => {
  return (
    <section className={styles.create_history__container}>
      <div style={style} className={styles.create_history__content}>
        {isCreate && (
          <div className={styles.create_history__nav}>
            <button className={styles.create_history__btn_close}>X</button>
            <button className={styles.create_history__create_history}>
              Listo
            </button>
          </div>
        )}

        {!isCreate && (
          <div className={styles.select_history__nav}>
            <button className={styles.select_history__btn_close}>X</button>
            <p>{noCreateName}</p>
            <i className="fa-solid fa-gear"></i>
          </div>
        )}

        {children}
      </div>
    </section>
  );
};
