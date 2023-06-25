import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { photoUser } from "../../../../../assets";
import { getTimeAgo } from "../../../../../helpers";
import { deleteField, doc, setDoc } from "firebase/firestore";
import { firebaseDB } from "../../../../../services";
import { SureDelete } from "../../../../../components/SureDelete/SureDelete";

import styles from "./stylesComponents.module.css";

export const InfoUserSeeHistory = ({
  countStorieSelect,
  infoUserActive,
  storieSelectPage,
  users,
}) => {
  const navigate = useNavigate();
  const [startLoading, setStartLoading] = useState(false);
  const [openSureDelete, setOpenSureDelete] = useState(false);
  const userStorie = users.find(
    (user) => user.uid === storieSelectPage?.uidUser
  );

  const onDeleteStorie = async () => {
    setStartLoading(true);

    try {
      await setDoc(
        doc(firebaseDB, "stories", infoUserActive.uid),
        {
          ["histories"]: {
            [storieSelectPage.idStorieCreate]: deleteField(),
          },
        },
        { merge: true }
      );

      setOpenSureDelete(false);
    } catch (error) {
      console.error(error);
    } finally {
      setStartLoading(false);
    }
  };

  return (
    <>
      <div className={styles.see_history__info_user}>
        <div className={styles.see_history__linetime}>
          {countStorieSelect.map((storie) => (
            <div
              className={styles.see_history__line}
              key={storie[0]}
              style={
                storie[0] === storieSelectPage.idStorieCreate
                  ? { background: "#0099ff" }
                  : {}
              }
            ></div>
          ))}
        </div>

        <div className={styles.see_history__user_date}>
          <figure className={styles.see_history__photo_user}>
            <img
              alt="Foto de perfil en la historia"
              className={styles.see_history__image}
              src={userStorie?.photoUrl || photoUser}
            />
            {userStorie?.isActive && <i className="fa-solid fa-circle"></i>}

            <figcaption
              className={styles.see_history__name_date_time_privacity}
            >
              <p className={styles.see_history__name}>
                {userStorie?.displayName}
              </p>
              <span className={styles.see_history__date}>
                {getTimeAgo(storieSelectPage?.date)}
              </span>
              <i className="fa-solid fa-earth-americas"></i>
            </figcaption>
          </figure>

          <div className={styles.see_history__trash_x}>
            <i className="fa-solid fa-xmark" onClick={() => navigate("/")}></i>

            {infoUserActive.uid === storieSelectPage?.uidUser && (
              <i
                className="fa-solid fa-trash"
                onClick={() => setOpenSureDelete(true)}
                style={{ background: startLoading ? "red" : "" }}
              ></i>
            )}
          </div>
        </div>
      </div>

      {openSureDelete && (
        <SureDelete
          confirmationMessage="¿Estas seguro que quieres eliminar esta historia?"
          onClose={() => setOpenSureDelete(false)}
          onDelete={onDeleteStorie}
        />
      )}
    </>
  );
};
