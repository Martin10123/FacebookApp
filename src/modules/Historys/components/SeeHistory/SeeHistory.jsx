import { useState, useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { arrayUnion, doc, setDoc } from "firebase/firestore";

import { AuthUserContext, GetHistoriesContext } from "../../../../context";
import { firebaseDB } from "../../../../services";
import { getTimeAgo } from "../../../../helpers";
import { OptionsHistory } from "./OptionsHistory";
import { photoUser } from "../../../../assets";
import { useDeletePhotoCloudinary } from "../../../../hooks";
import { WhoViewMyHistory } from "../WhoViewMyHistory/WhoViewMyHistory";

import styles from "./seeHistory.module.css";

export const SeeHistory = () => {
  const { users, infoUserActive } = useContext(AuthUserContext);
  const { getHistories } = useContext(GetHistoriesContext);

  const [openOptions, setOpenOptions] = useState(false);
  const [nextHistory, setNextHistory] = useState(0);
  const [openWhoSeeHistories, setOpenWhoSeeHistories] = useState(false);

  const { history_id } = useParams();
  const navigate = useNavigate();

  const getHistoriesUserSelect = getHistories
    .map(
      (history) =>
        Object.entries(history)[0][1].uidUser === history_id &&
        Object.entries(history)
    )
    .find(Boolean);

  const userCreateHistory = users.find((user) => user?.uid === history_id);
  const historySelected = getHistoriesUserSelect[nextHistory];

  const goToPrevSlide = () => {
    if (nextHistory === 0) {
      setNextHistory(getHistoriesUserSelect.length - 1);
    } else {
      setNextHistory(nextHistory - 1);
    }
  };

  const goToNextSlide = () => {
    if (nextHistory === getHistoriesUserSelect.length - 1) {
      setNextHistory(0);
    } else {
      setNextHistory(nextHistory + 1);
    }
  };

  useEffect(() => {
    if (
      historySelected[1]?.whoViewHistory?.includes(infoUserActive.uid) ||
      historySelected[1]?.uidUser === infoUserActive.uid
    )
      return;

    const whoViewHistory = async () => {
      try {
        await setDoc(
          doc(firebaseDB, "histories", historySelected[1]?.uidUser),
          {
            [historySelected[0]]: {
              whoViewHistory: arrayUnion(infoUserActive.uid),
            },
          },
          { merge: true }
        );
      } catch (error) {
        console.error(error);
      }
    };

    whoViewHistory();
  }, [nextHistory]);

  return (
    <>
      <div className={styles.see_history__container}>
        <div
          className={styles.see_history__content}
          style={{
            background: historySelected[1]?.colorHistory
              ? historySelected[1]?.colorHistory
              : "",
          }}
        >
          <div className={styles.see_history__header}>
            <div className={styles.see_history__timeline}>
              {getHistoriesUserSelect.map((lineHistory) => (
                <div
                  key={lineHistory[0]}
                  className={styles.see_history__line}
                  style={{
                    background:
                      lineHistory[0] === historySelected[0] ? "#0099ff" : "",
                  }}
                ></div>
              ))}
            </div>

            <div className={styles.see_history__info_user}>
              <figure className={styles.see_history__photo_user}>
                <img
                  src={userCreateHistory.photoUrl || photoUser}
                  alt="Foto de perfil del usuario"
                />
                <figcaption>
                  {userCreateHistory.displayName}{" "}
                  <p>{getTimeAgo(historySelected[1]?.date)}</p>
                </figcaption>
              </figure>

              <span>
                <i
                  className="fa-solid fa-ellipsis"
                  onClick={() => setOpenOptions(true)}
                ></i>
                <i className="fa-solid fa-x" onClick={() => navigate(-1)}></i>
              </span>

              {openOptions && (
                <OptionsHistory
                  historySelected={historySelected}
                  infoUserActive={infoUserActive}
                  setOpenOptions={setOpenOptions}
                />
              )}
            </div>
          </div>

          {historySelected[1]?.textHistory && (
            <div className={styles.see_history__text}>
              <p>{historySelected[1]?.textHistory}</p>
            </div>
          )}

          {historySelected[1]?.photoHistory && (
            <figure className={styles.see_history__image}>
              <img
                src={historySelected[1]?.photoHistory}
                alt="Foto de la historia"
              />
            </figure>
          )}

          <div className={styles.see_history__send_message}>
            <div
              className={styles.see_history__count_view_history}
              onClick={() => setOpenWhoSeeHistories(true)}
            >
              <p>{historySelected[1].whoViewHistory.length}</p>
              <i className="fa-regular fa-eye"></i>
            </div>

            <div className={styles.see_history__input_form}>
              <i className="fa-brands fa-facebook-messenger"></i>
              <p>Enviar mensaje...</p>
            </div>
          </div>
        </div>

        <button
          className={styles.see_history__button_prev}
          onClick={goToPrevSlide}
        >
          <i className="fa-solid fa-arrow-left"></i>
        </button>
        <button
          className={styles.see_history__button_next}
          onClick={goToNextSlide}
        >
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>

      {openWhoSeeHistories && (
        <WhoViewMyHistory
          historySelected={historySelected}
          setOpenWhoSeeHistories={setOpenWhoSeeHistories}
          users={users}
        />
      )}
    </>
  );
};
