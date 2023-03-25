import styles from "../page/editDetails.module.css";

export const LayoutDetails = ({
  infoDetail,
  onOpenModal,
  title,
  titleButton,
}) => {
  return (
    <div className={styles.layout_work__content}>
      <h2>{title}</h2>

      <p className={styles.details__info_detail}>{infoDetail}</p>

      <button className={styles.layout_work__button} onClick={onOpenModal}>
        {titleButton}
      </button>
    </div>
  );
};
