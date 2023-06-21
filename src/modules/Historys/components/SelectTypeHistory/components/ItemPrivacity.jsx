import styles from "./componentsStyles.module.css";

export const ItemPrivacity = ({ icon, type, descrip }) => {
  return (
    <li className={styles.privacity__item_privacity}>
      <div className={styles.privacity__title_option}>
        <span className={styles.privacity__icon_option}>
          <i className={icon}></i>
        </span>
        <span className={styles.privacity__type}>
          <h3>{type}</h3>
          <p>{descrip}</p>
        </span>
      </div>

      <input type="radio" className={styles.privacity__input_check} />
    </li>
  );
};
