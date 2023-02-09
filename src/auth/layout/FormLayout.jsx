import styles from "./layout.module.css";

export const FormLayout = ({ children, title, imageBack, titleRedirect }) => {
  return (
    <div className={styles.layout__container}>
      <div className={styles.layout__content_img}>
        <img src={imageBack} alt={`Imagen relacionada al ${title}`} />
      </div>

      <div className={styles.layout__content}>
        <h1>{title}</h1>

        {title === "Login" ? (
          <form className={styles.layout__form}>{children}</form>
        ) : (
          <div className={styles.layout__form}>{children}</div>
        )}

        {title === "Login" && (
          <p className={styles.layout__forgot_password}>
            ¿Olvidaste tu contraseña?
          </p>
        )}

        {!!titleRedirect && (
          <span className={styles.layout__redirect_register}>
            ¿Aún no tienes cuenta? <a href="#">{titleRedirect}</a>
          </span>
        )}
      </div>
    </div>
  );
};
