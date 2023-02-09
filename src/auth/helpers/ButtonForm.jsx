import styles from "./helpers.module.css";

export const ButtonForm = ({ title, stylesButton, onSubmit }) => {
  return (
    <button
      className={styles.login__button}
      onClick={onSubmit}
      style={stylesButton}
      type="submit"
    >
      {title}
    </button>
  );
};
