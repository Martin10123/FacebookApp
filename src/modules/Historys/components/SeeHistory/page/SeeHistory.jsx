import { SeeHistoryDesk, SeeHistoryMobile } from "../components";
import { useSeeHistory } from "../../hooks";

import styles from "./seeHistory.module.css";

export const SeeHistory = () => {
  const {
    // Atributos
    colorStorie,
    countStorieSelect,
    getAllStoriesWithOutEmpty,
    getHistories,
    infoUserActive,
    numStorie,
    startLoading,
    storieSelectPage,
    users,

    // Metodos
    navigate,
    onDeleteStorie,
    onNextStorie,
    onPassOtherStorie,
    onPreviewStorie,
  } = useSeeHistory();

  return (
    <div className={styles.see_history__container} style={colorStorie}>
      <div className={styles.see_history__content_mobile_desk}>
        <SeeHistoryDesk
          getHistories={getHistories}
          infoUserActive={infoUserActive}
          onPassOtherStorie={onPassOtherStorie}
          users={users}
        />

        <div className={styles.see_history__info_histories_posted}>
          {getAllStoriesWithOutEmpty.length === 0 && (
            <div className={styles.see_history__content}>
              <span className={styles.see_history__title_storie_no_avaible}>
                <p>
                  Esta historia no esta disponible, es posible que el autor la
                  haya eliminado o hayan pasado las 24 horas
                </p>

                <button onClick={() => navigate("/")}>Salir</button>
              </span>
            </div>
          )}

          {getAllStoriesWithOutEmpty.length > 0 && (
            <SeeHistoryMobile
              colorStorie={colorStorie}
              countStorieSelect={countStorieSelect}
              infoUserActive={infoUserActive}
              numStorie={numStorie}
              onDeleteStorie={onDeleteStorie}
              onNextStorie={onNextStorie}
              onPreviewStorie={onPreviewStorie}
              startLoading={startLoading}
              storieSelectPage={storieSelectPage}
              users={users}
            />
          )}
        </div>
      </div>
    </div>
  );
};
