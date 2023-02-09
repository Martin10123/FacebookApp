import styles from "./helpers.module.css";

export const InputForm = ({
  errorActive,
  name,
  onChange,
  placeholder,
  styleIcon,
  textError,
  type,
  value,
}) => {
  return (
    <>
      <div className={styles.login__content_input}>
        <i className={styleIcon}></i>
        <input
          className={styles.login__input}
          type={type}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
        />
      </div>

      {errorActive && (
        <div className={styles.errorMessage}>
          <i className="fa-sharp fa-solid fa-triangle-exclamation"></i>
          <p> {textError} </p>
        </div>
      )}
    </>
  );
};
