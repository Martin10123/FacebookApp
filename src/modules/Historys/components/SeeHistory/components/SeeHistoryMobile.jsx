import {
  InfoUserSeeHistory,
  ListMessagesPrede,
  ListReactionsHistory,
} from "./";

import styles from "../page/seeHistory.module.css";

export const SeeHistoryMobile = ({
  colorStorie,
  countStorieSelect,
  infoUserActive,
  onDeleteStorie,
  onNextStorie,
  onPreviewStorie,
  startLoading,
  storieSelectPage,
  users,
}) => {
  const userStorie = users.find(
    (user) => user.uid === storieSelectPage?.uidUser
  );

  const isTheSameUser = infoUserActive?.uid === userStorie?.uid;

  return (
    <>
      <div className={styles.see_history__content} style={colorStorie}>
        <InfoUserSeeHistory
          countStorieSelect={countStorieSelect}
          infoUserActive={infoUserActive}
          onDeleteStorie={onDeleteStorie}
          startLoading={startLoading}
          storieSelectPage={storieSelectPage}
          userStorie={userStorie}
        />

        {storieSelectPage?.photoUrl && (
          <div className={styles.see_history__image_history}>
            <figure className={styles.see_history__content_photo}>
              <img src={storieSelectPage.photoUrl} alt="Foto de la historia" />
            </figure>
          </div>
        )}

        {storieSelectPage?.textHistory && (
          <div className={styles.see_history__text_storie}>
            <p>{storieSelectPage.textHistory}</p>
          </div>
        )}

        <ListMessagesPrede
          infoUserActive={infoUserActive}
          isTheSameUser={isTheSameUser}
          storieSelectPage={storieSelectPage}
          userStorie={userStorie}
        />
      </div>

      <div>
        <ListReactionsHistory
          isTheSameUser={isTheSameUser}
          storieSelectPage={storieSelectPage}
          userStorie={userStorie}
        />
      </div>

      <div className={styles.see_history__content_arrow_next_preview}>
        <div className={styles.see_history__next} onClick={onNextStorie}>
          <i className="fa-solid fa-angle-right"></i>
        </div>
        <div className={styles.see_history__preview} onClick={onPreviewStorie}>
          <i className="fa-solid fa-chevron-left"></i>
        </div>
      </div>
    </>
  );
};
