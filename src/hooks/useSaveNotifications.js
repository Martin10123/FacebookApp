import { useContext } from "react";
import { AuthUserContext } from "../context";
import { doc, setDoc } from "firebase/firestore";
import { firebaseDB } from "../services";

export const useSaveNotifications = () => {
  const { infoUserActive } = useContext(AuthUserContext);

  const savaNotification = async ({
    dataToSave,
    idToSaveDocument,
    typeNotifi,
    uidUserReceiveNotifi,
  }) => {
    if (infoUserActive.uid === uidUserReceiveNotifi) {
      return;
    }

    try {
      const notificationDescriptions = {
        acceptRequest: `${infoUserActive.displayName} acepto tu solicitud de amistad`,
        answers: `${infoUserActive.displayName} respondió a tu comentario`,
        comments: `${infoUserActive.displayName} comentó tu publicación`,
        reactionanswers: `${infoUserActive.displayName} reaccionó a tu respuesta`,
        reactioncomments: `${infoUserActive.displayName} reaccionó a tu comentario`,
        reactionposts: `${infoUserActive.displayName} reaccionó a tu publicación`,
        requestFriend: `${infoUserActive.displayName} te envió una solicitud de amistad`,
        share: `${infoUserActive.displayName} compartió tu publicación`,
        tagFriends: `${infoUserActive.displayName} te etiqueto en una publicación`,
      };

      const descriptionNotifi = notificationDescriptions[typeNotifi];

      const createIDUniq = `${Math.random()}-${uidUserReceiveNotifi}/${
        infoUserActive.username
      }`;

      await setDoc(
        doc(firebaseDB, "notifications", uidUserReceiveNotifi),
        {
          ["notifications"]: {
            [createIDUniq]: {
              dataToSave,
              date: new Date().getTime(),
              descriptionNotifi,
              idDocumentNotifi: idToSaveDocument,
              typeNotifi,
              uidUserReceiveNotifi,
              uidUserWhoSentNotification: infoUserActive.uid,
              view: false,
            },
          },
        },
        { merge: true }
      );
    } catch (error) {
      console.error("Error al guardar la notificación", error);
    }
  };

  return { savaNotification };
};
