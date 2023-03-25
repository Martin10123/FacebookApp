import styles from "./helpers.module.css";

export const ButtonForm = ({ disabled, title, stylesButton, onSubmit }) => {
  return (
    <button
      className={styles.login__button}
      disabled={disabled}
      onClick={onSubmit}
      style={stylesButton}
      type="submit"
    >
      {title}
    </button>
  );
};
