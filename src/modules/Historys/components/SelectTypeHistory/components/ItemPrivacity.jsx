import styles from "./componentsStyles.module.css";

export const ItemPrivacity = ({
  changeInput,
  descrip,
  icon,
  name,
  onChange,
  selectedPreview,
  type,
}) => {
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

      <input
        checked={selectedPreview === type}
        className={styles.privacity__input_check}
        name={name}
        onChange={onChange}
        type={changeInput ? "checkbox" : "radio"}
        value={type}
      />
    </li>
  );
};
