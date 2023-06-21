import { useNavigate } from "react-router-dom";
import { CardHistoryMain } from "./CardHistoryMain";
import { photoUser } from "../../../assets";

import styles from "./history.module.css";

export const HistoryPage = () => {
  const navigate = useNavigate();

  return (
    <section className={styles.history__container}>
      <div
        className={styles.history__create_history}
        onClick={() => navigate("/stories/create")}
      >
        <figure className={styles.history__create_photo}>
          <img src={photoUser} alt="Foto de perfil" />
        </figure>
        <i className="fa-solid fa-circle-plus"></i>
        <p>Crear historia</p>
      </div>

      {false && (
        <div className="loading_box_dimension">
          <div className="spinner"></div>
        </div>
      )}

      {false && <CardHistoryMain history={aloneUserActive} users={users} />}

      <CardHistoryMain />
    </section>
  );
};
