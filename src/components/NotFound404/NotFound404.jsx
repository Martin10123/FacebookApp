import { Link } from "react-router-dom";
import { notFound404 } from "../../assets";

import styles from "./notFound404.module.css";

export const NotFound404 = () => {
  return (
    <div className={styles.not_found__container}>
      <div className={styles.not_found__content}>
        <h1>Pagina no encontrada!</h1>

        <img
          className={styles.not_found__img}
          src={notFound404}
          alt="Not found 404"
        />

        <div className={styles.not_found__buttons}>
          <Link to="/">Regresar</Link>
        </div>
      </div>
    </div>
  );
};
