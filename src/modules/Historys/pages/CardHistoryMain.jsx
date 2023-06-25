import { useNavigate } from "react-router-dom";
import { photoUser } from "../../../assets";

import styles from "./history.module.css";

export const CardHistoryMain = ({ history, users }) => {
  const navigate = useNavigate();
  const userCreateStorie = users.find((user) => user.uid === history.uidUser);

  return (
    <div
      className={styles.history__card_info}
      style={history.selectColor ? { background: history.selectColor } : {}}
      onClick={() => navigate(`/stories/${userCreateStorie.uid}`)}
    >
      <img
        alt="Foto de perfil"
        className={styles.history__card_photo_user}
        src={userCreateStorie.photoUrl || photoUser}
      />

      {history.photoUrl && (
        <img
          alt="Imagen de la historia"
          className={styles.history__card_photo_select}
          src={history.photoUrl}
        />
      )}

      {history.textHistory && (
        <div className={styles.history__text_card}>
          <p>{history.textHistory}</p>
        </div>
      )}

      <p>{userCreateStorie.displayName}</p>
    </div>
  );
};
