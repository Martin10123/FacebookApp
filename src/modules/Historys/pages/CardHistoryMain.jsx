import { useNavigate } from "react-router-dom";
import { photoUser } from "../../../assets";

import styles from "./history.module.css";

export const CardHistoryMain = ({ history, users }) => {
  const navigate = useNavigate();
  const userCreateHistory = users.find(
    (user) => user?.uid === history?.uidUser
  );

  return (
    <div
      className={styles.history__card_info}
      onClick={() => navigate(`/histories/${userCreateHistory?.uid}`)}
      style={{ background: history?.colorHistory ? history?.colorHistory : "" }}
    >
      <img
        className={styles.history__card_photo_user}
        src={userCreateHistory?.photoUrl || photoUser}
        alt="Foto de perfil"
      />

      {history?.isPhoto && (
        <img
          className={styles.history__card_photo_select}
          src={history.photoHistory}
          alt=""
        />
      )}

      {history?.textHistory && (
        <div className={styles.history__text_card}>
          <p>{history?.textHistory}</p>
        </div>
      )}

      <p>{userCreateHistory?.displayName}</p>
    </div>
  );
};
