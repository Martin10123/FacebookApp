import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  SeeReactionsHistories,
  InfoUserSeeHistory,
  ListReactionsHistory,
  SeeHistoryDesk,
} from "../components";
import { AuthUserContext, GetHistoriesContext } from "../../../../../context";

import styles from "./seeHistory.module.css";

export const SeeHistory = () => {
  const { infoUserActive, users } = useContext(AuthUserContext);
  const { getHistories } = useContext(GetHistoriesContext);
  const { uidUser } = useParams();

  const [selectStorieUser, setSelectStorieUser] = useState(uidUser);
  const [indexStorieSelect, setIndexStorieSelect] = useState(-1);
  const [numStorie, setNumStorie] = useState(0);

  useEffect(() => {
    const index = getHistories.findIndex(
      (indexStorie) => indexStorie.idStorie === selectStorieUser
    );

    setIndexStorieSelect(index);
  }, [getHistories, selectStorieUser]);

  const nonEmptyHistories = getHistories.filter(
    (stories) =>
      Object.keys(stories.histories).length > 0 &&
      stories.idStorie === selectStorieUser
  );

  const countStorieSelect = Object.entries(
    nonEmptyHistories[0]?.histories || {}
  );

  const storieSelectPage = countStorieSelect[numStorie]?.[1];

  const colorStorie = storieSelectPage?.selectColor
    ? { background: storieSelectPage.selectColor }
    : {};

  const onNextStorie = () => {
    if (numStorie >= countStorieSelect.length - 1) {
      if (indexStorieSelect < getHistories.length - 1) {
        setIndexStorieSelect(indexStorieSelect + 1);

        setNumStorie(0);

        setSelectStorieUser(getHistories[indexStorieSelect + 1].idStorie);
      }

      return;
    }

    setNumStorie(numStorie + 1);
  };
  const onPreviewStorie = () => {
    if (numStorie === 0) {
      if (indexStorieSelect !== 0) {
        setIndexStorieSelect(indexStorieSelect - 1);

        setNumStorie(0);

        setSelectStorieUser(getHistories[indexStorieSelect - 1].idStorie);
      }
    }

    if (numStorie <= 0) return;

    setNumStorie(numStorie - 1);
  };

  const onPassOtherStorie = (uidUser) => {
    setNumStorie(0);

    setSelectStorieUser(uidUser);
  };

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
          <div className={styles.see_history__content} style={colorStorie}>
            <InfoUserSeeHistory
              countStorieSelect={countStorieSelect}
              infoUserActive={infoUserActive}
              storieSelectPage={storieSelectPage}
              users={users}
            />

            {storieSelectPage?.photoUrl && (
              <div className={styles.see_history__image_history}>
                <figure className={styles.see_history__content_photo}>
                  <img
                    src={storieSelectPage.photoUrl}
                    alt="Foto de la historia"
                  />
                </figure>
              </div>
            )}

            {storieSelectPage?.textHistory && (
              <div className={styles.see_history__text_storie}>
                <p>{storieSelectPage.textHistory}</p>
              </div>
            )}

            <SeeReactionsHistories />
          </div>

          <div>
            <ListReactionsHistory />
          </div>

          <div className={styles.see_history__content_arrow_next_preview}>
            <div className={styles.see_history__next} onClick={onNextStorie}>
              <i className="fa-solid fa-angle-right"></i>
            </div>
            <div
              className={styles.see_history__preview}
              onClick={onPreviewStorie}
            >
              <i className="fa-solid fa-chevron-left"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
