import { Link } from "react-router-dom";

import styles from "./seeHistory.module.css";

export const HistoryNotFound = () => {
  return (
    <div className={styles.see_history__container}>
      <div className={styles.see_history__content}>
        <div className={styles.see_history__text}>
          <p>
            Esta historia ya no esta disponible, es posible que el propietario
            ya la haya borrado
          </p>
        </div>
        <Link className={styles.see_history_link_return} to="/">
          Regresar
        </Link>
      </div>
    </div>
  );
};
