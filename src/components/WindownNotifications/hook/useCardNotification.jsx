import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { firebaseDB } from "../../../services";
import { reactionsDataPost } from "../../Posts/helpers";

import styles from "../windownNotifications.module.css";

export const useCardNotification = ({ notifi, users }) => {
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

  const whatIconIs = () => {
    if (typeNotifi.substring(0, 8) === "reaction") {
      const reactionFound = reactionsDataPost.find(
        (reaction) => reaction.tofire === dataToSave
      );

      return (
        <figure className={styles.windownNoti__content_emoji}>
          <img
            alt={reactionFound.name}
            className={styles.windownNoti__emoji}
            src={reactionFound.img}
          />
        </figure>
      );
    } else {
      return (
        <div className={styles.windownNoti__content_icon}>
          <i className="fa-solid fa-comment"></i>
        </div>
      );
    }
  };

  return {
    // Atributos
    date,
    descriptionNotifi,
    userNotifi,
    view,

    // Metodos
    onViewPost,
    whatIconIs,
  };
};
