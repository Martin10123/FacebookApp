import styles from "./autoComplete.module.css";

export const AutoComplete = () => {
  return (
    <div className={styles.auto__container}>
      <ul className={styles.auto__content_list}>
        <li className={styles.auto__li_item}>
          <p>Luis Perez</p>
          <i className="fa-solid fa-circle-xmark"></i>
        </li>
      </ul>
    </div>
  );
};
