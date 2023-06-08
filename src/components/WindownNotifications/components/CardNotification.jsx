import { useNavigate } from "react-router-dom";
import { photoUser } from "../../../assets";
import { getTimeAgo } from "../../../helpers";
import { doc, setDoc } from "firebase/firestore";
import { firebaseDB } from "../../../services";

import styles from "../windownNotifications.module.css";

export const CardNotification = ({ notifi, users }) => {
  const {
    descriptionNotifi,
    idDocumentNotifi,
    dataToSave,
    date,
    typeNotifi,
    uidUserReceiveNotifi,
    uidUserWhoSentNotification,
    view,
  } = notifi[1];

  const navigate = useNavigate();

  const userNotifi = users.find(
    (userFound) => userFound.uid === uidUserWhoSentNotification
  );

  const onViewPost = async () => {
    const linkTo =
      typeNotifi === "requestFriend"
        ? "/friends"
        : `/${userNotifi.displayName}/post/${idDocumentNotifi}`;

    navigate(linkTo);

    try {
      await setDoc(
        doc(firebaseDB, "notifications", uidUserReceiveNotifi),
        {
          ["notifications"]: {
            [notifi[0]]: {
              ...notifi[1],
              view: true,
            },
          },
        },
        { merge: true }
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.windownNoti__info_user} onClick={onViewPost}>
      <figure className={styles.windownNoti__photo_user}>
        <img src={userNotifi.photoUrl || photoUser} alt="Foto de perfil" />
        <i className="fa-solid fa-circle"></i>
      </figure>
      <div className={styles.windownNoti__content_type_notifi}>
        <p className={styles.windownNoti__type_notifi}>{descriptionNotifi}</p>
        <p className={styles.windownNoti__date}>{`Hace ${getTimeAgo(date)}`}</p>
      </div>

      {!view && (
        <i
          className={`fa-solid fa-circle ${styles.windownNoti__btn_not_reading}`}
        ></i>
      )}
    </div>
  );
};
