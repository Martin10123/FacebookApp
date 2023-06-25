import { useNavigate } from "react-router-dom";
import { photoUser } from "../../../../../assets";
import { HistoryDesk } from "../../SelectTypeHistory/components/HistoryDesk";
import { getTimeAgo } from "../../../../../helpers";

import styles from "./stylesComponents.module.css";

export const SeeHistoryDesk = ({
  getHistories,
  infoUserActive,
  onPassOtherStorie,
  users,
}) => {
  const navigate = useNavigate();

  const usersWithHistories = getHistories
    .map((storie) => {
      const storieUser = users.find((user) => user.uid === storie.idStorie);

      if (!storieUser || Object.keys(storie.histories).length === 0) {
        return null;
      }

      const countHistory = Object.values(storie.histories).length;
      const date = Object.values(storie.histories)[0].date;

      return {
        countHistory,
        date,
        displayName: storieUser.displayName,
        photoUrl: storieUser.photoUrl,
        uid: storieUser.uid,
      };
    })
    .filter(Boolean);

  return (
    <HistoryDesk
      removeRowsGrid={true}
      displayNameUser={infoUserActive.displayName}
    >
      <div className={styles.see_history__content_histories_all_users}>
        <div
          className={styles.see_history__create_history}
          onClick={() => navigate("/stories/create")}
        >
          <span className={styles.see_history__plus_icon}>
            <i className="fa-solid fa-plus"></i>
          </span>

          <div className={styles.see_history__title_create_history}>
            <h4>Crear una historia</h4>
            <p>Comparte una foto o escribe algo</p>
          </div>
        </div>

        <div className={styles.see_history__all_histories}>
          <h4>Todas las historias</h4>

          <div className={styles.see_history__content_histories}>
            {usersWithHistories.map((userStorie) => (
              <div
                className={styles.see_history__history_user}
                key={userStorie.uid}
                onClick={() => onPassOtherStorie(userStorie.uid)}
              >
                <figure className={styles.see_history__photo_user_history}>
                  <img
                    src={userStorie.photoUrl || photoUser}
                    alt="Foto de perfil del usuario"
                  />
                </figure>

                <div className={styles.see_history__info_user_history}>
                  <h5>{userStorie.displayName}</h5>
                  <span className={styles.see_history__count_histories_time}>
                    <p>{userStorie.countHistory} Nuevas</p>
                    <p>{getTimeAgo(userStorie.date)}</p>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </HistoryDesk>
  );
};
