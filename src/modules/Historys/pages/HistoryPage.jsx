import { CardHistoryMain } from "./CardHistoryMain";
import { photoUser } from "../../../assets";
import { useHistoryPage } from "../hook/useHistoryPage";

import styles from "./history.module.css";

export const HistoryPage = () => {
  const {
    // Atributos
    arrayStorieUserActive,
    infoUserActive,
    nonEmptyHistories,
    startLoadingHistories,
    users,

    // Metodos
    navigate,
    numBetweenCeroOrLength,
  } = useHistoryPage();

  return (
    <section className={styles.history__container}>
      <div
        className={styles.history__create_history}
        onClick={() => navigate("/stories/create")}
      >
        <figure className={styles.history__create_photo}>
          <img
            src={infoUserActive.photoUrl || photoUser}
            alt="Foto de perfil"
          />
        </figure>
        <i className="fa-solid fa-circle-plus"></i>
        <p>Crear historia</p>
      </div>

      {startLoadingHistories && (
        <div className="loading_box_dimension">
          <div className="spinner"></div>
        </div>
      )}

      {arrayStorieUserActive.length > 0 && (
        <CardHistoryMain
          history={
            arrayStorieUserActive[
              numBetweenCeroOrLength(arrayStorieUserActive.length)
            ]
          }
          users={users}
        />
      )}

      {nonEmptyHistories.map((stories) => {
        const getAllHistories = Object.values(stories.histories || {});
        const randomIndex = numBetweenCeroOrLength(getAllHistories.length);
        const history = getAllHistories[randomIndex];

        return (
          <CardHistoryMain
            key={stories.idStorie}
            history={history}
            users={users}
          />
        );
      })}
    </section>
  );
};
