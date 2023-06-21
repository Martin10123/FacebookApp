import styles from "../page/createHistory.module.css";

export const CreateHistoryPreview = ({ children }) => {
  return (
    <div className={styles.create_preview__container}>
      <div className={styles.create_preview__content}>
        <h4>Vista previa</h4>

        <div className={styles.create_preview__content_text}>{children}</div>
      </div>
    </div>
  );
};
