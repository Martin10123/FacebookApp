import { Link } from "react-router-dom";
import styles from "./layout.module.css";

export const FormLayout = ({ children, title, imageBack, titleRedirect }) => {
  const linkTo = title === "Login" ? "/auth/register" : "/auth/login";

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
          <Link to="/auth/recover" className={styles.layout__forgot_password}>
            ¿Olvidaste tu contraseña?
          </Link>
        )}

        {!!titleRedirect && (
          <span className={styles.layout__redirect_register}>
            {title === "Login"
              ? "¿Aún no tienes cuenta?"
              : "¿Ya tienes cuenta?"}
            <Link to={linkTo}>{titleRedirect}</Link>
          </span>
        )}
      </div>
    </div>
  );
};
