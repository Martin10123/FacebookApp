import styles from "../page/editDetails.module.css";

export const LayoutDetails = ({ title, infoDetail, titleButton }) => {
  return (
    <div className={styles.layout_work__content}>
      <h2>{title}</h2>

      <p className={styles.details__info_detail}>
        {infoDetail}
        <i className="fa-solid fa-trash"></i>
      </p>

      <button className={styles.layout_work__button}>{titleButton}</button>
    </div>
  );
};
